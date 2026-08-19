import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

// Trust proxy if behind Vercel or other reverse proxies
app.set('trust proxy', 1);

// Security Headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
      connectSrc: ["'self'"],
    },
  },
}));

// Basic middleware
app.use(cors());
app.use(express.json());

// Rate limiting for the contact endpoint
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: { error: 'Too many requests from this IP, please try again later.' }
});

// API Routes
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, company, role, purpose, credentials, message, honeypot } = req.body;

    // Honeypot check
    if (honeypot) {
      return res.status(400).json({ error: 'Spam detected' });
    }

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const emailContent = `
      New Enquiry from High Cloud Soft Tech Website:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'N/A'}
      Company: ${company || 'N/A'}
      Role/Purpose: ${role || purpose || 'N/A'}
      Credentials: ${credentials || 'N/A'}
      Message: ${message || 'N/A'}
    `;

    // Send email using Resend
    // If running without a real key, this might throw or we can mock it
    if (process.env.RESEND_API_KEY) {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // Use a verified domain in production
        to: [process.env.CONTACT_EMAIL || 'hello@highcloud.in'],
        subject: `New Enquiry from ${name}`,
        text: emailContent,
      });

      if (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ error: 'Failed to send message' });
      }
    } else {
      console.log('Mock email sent (No RESEND_API_KEY provided):', emailContent);
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact API Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
