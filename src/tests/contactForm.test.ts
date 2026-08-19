import { describe, it, expect } from 'vitest';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  purpose: z.string().min(1),
  message: z.string().min(10),
});

describe('Contact Form Validation', () => {
  it('should validate correct data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      purpose: 'project',
      message: 'This is a test message that is long enough.',
    };
    
    expect(formSchema.safeParse(validData).success).toBe(true);
  });

  it('should invalidate short names', () => {
    const invalidData = {
      name: 'J',
      email: 'john@example.com',
      purpose: 'project',
      message: 'This is a test message that is long enough.',
    };
    
    expect(formSchema.safeParse(invalidData).success).toBe(false);
  });

  it('should invalidate bad emails', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john-at-example.com',
      purpose: 'project',
      message: 'This is a test message that is long enough.',
    };
    
    expect(formSchema.safeParse(invalidData).success).toBe(false);
  });
});
