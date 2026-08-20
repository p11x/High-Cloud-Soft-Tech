import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'mark' | 'horizontal' | 'full' | 'card';
  theme?: 'dark' | 'light' | 'auto';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  withBox?: boolean;
}

export default function Logo({ 
  className = "", 
  variant = "mark",
  theme = "dark",
  size = "md",
  withBox = true
}: LogoProps) {
  // Size presets for emblem box
  const boxSizes = {
    xs: "w-7 h-7 p-1 rounded-lg",
    sm: "w-9 h-9 p-1.5 rounded-xl",
    md: "w-11 h-11 p-2 rounded-xl",
    lg: "w-14 h-14 p-2.5 rounded-2xl",
    xl: "w-20 h-20 p-3 rounded-2xl",
    '2xl': "w-32 h-32 p-4 rounded-3xl",
    custom: ""
  };

  // Size presets for bare emblem SVG
  const svgSizes = {
    xs: "w-5 h-5",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-16 h-16",
    '2xl': "w-24 h-24",
    custom: ""
  };

  const currentBoxClass = boxSizes[size];
  const currentSvgClass = svgSizes[size];

  // SVG Mark component (The 3D H & infinity swoop)
  const LogoMark = ({ customClass = "" }: { customClass?: string }) => (
    <svg 
      className={`${customClass || currentSvgClass} transition-transform duration-300 group-hover:scale-105`}
      viewBox="0 0 500 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow */}
        <radialGradient id="hcGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
        </radialGradient>

        {/* Left Dark Pillar */}
        <linearGradient id="hcDarkPillarFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="40%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="hcDarkPillarSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>

        {/* Right Blue Pillar */}
        <linearGradient id="hcBluePillarFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="35%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#0055FF" />
        </linearGradient>
        <linearGradient id="hcBluePillarSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0080FF" />
          <stop offset="100%" stopColor="#0044CC" />
        </linearGradient>

        {/* Ribbon Loops */}
        <linearGradient id="hcRibbonGradFront" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="25%" stopColor="#00B4FF" />
          <stop offset="70%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#003DBD" />
        </linearGradient>
        <linearGradient id="hcRibbonGradBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0055D4" />
          <stop offset="100%" stopColor="#002277" />
        </linearGradient>

        {/* Soft Drop Shadow Filter */}
        <filter id="hcShadow" x="-15%" y="-15%" width="130%" height="135%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Ambient center aura */}
      <ellipse cx="250" cy="210" rx="160" ry="60" fill="url(#hcGlow)" />

      <g filter="url(#hcShadow)">
        {/* BACK RIBBON LOOPS */}
        <path 
          d="M 215 140 C 190 95 135 105 115 145 C 95 185 115 225 155 240" 
          fill="none" 
          stroke="url(#hcRibbonGradBack)" 
          strokeWidth="24" 
          strokeLinecap="round" 
        />
        
        <path 
          d="M 315 210 C 355 195 395 210 395 255 C 395 295 335 305 285 260" 
          fill="none" 
          stroke="url(#hcRibbonGradBack)" 
          strokeWidth="22" 
          strokeLinecap="round" 
        />

        {/* LEFT PILLAR */}
        <polygon points="160,85 185,102 185,310 160,325" fill="url(#hcDarkPillarSide)" />
        <polygon points="185,102 225,110 225,295 185,310" fill="url(#hcDarkPillarFront)" />
        <polygon points="160,85 200,90 225,110 185,102" fill="#64748B" />
        
        {/* H Crossbar */}
        <polygon points="225,185 275,185 275,225 225,225" fill="#0A1120" />

        {/* RIGHT PILLAR */}
        <polygon points="275,110 300,90 300,295 275,310" fill="url(#hcBluePillarSide)" />
        <polygon points="300,90 340,85 340,325 300,295" fill="url(#hcBluePillarFront)" />
        <polygon points="275,110 300,90 340,85 315,102" fill="#67E8F9" />

        {/* DIGITAL PIXELS */}
        <rect x="345" y="80" width="16" height="16" rx="2" fill="#00E5FF" />
        <rect x="368" y="70" width="18" height="18" rx="2" fill="#00A3FF" />
        <rect x="358" y="45" width="16" height="16" rx="2" fill="#38BDF8" />
        <rect x="382" y="40" width="14" height="14" rx="2" fill="#0091FF" />
        <rect x="404" y="32" width="10" height="10" rx="1.5" fill="#00D2FF" />
        <rect x="398" y="58" width="15" height="15" rx="2" fill="#0066FF" />
        <rect x="372" y="98" width="12" height="12" rx="1.5" fill="#0284C7" />
        <rect x="358" y="122" width="14" height="14" rx="2" fill="#0070F3" />
        <rect x="345" y="105" width="12" height="12" rx="1.5" fill="#38BDF8" />

        {/* FRONT RIBBON SWOOP */}
        <path 
          d="M 108 200 C 95 240 135 285 185 280 C 238 275 282 195 335 170 C 375 152 405 185 378 235 C 352 272 305 260 265 225" 
          fill="none" 
          stroke="url(#hcRibbonGradFront)" 
          strokeWidth="24" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* GLOSSY HIGHLIGHT */}
        <path 
          d="M 116 205 C 105 235 140 275 185 270 C 235 265 280 188 335 163 C 370 148 395 178 375 220" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeOpacity="0.8" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
      </g>
    </svg>
  );

  // When boxed mark is requested
  const BoxedLogoMark = ({ boxClass = "", customSvgClass = "" }: { boxClass?: string; customSvgClass?: string }) => (
    <div className={`bg-white shadow-md shadow-black/10 border border-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${boxClass || currentBoxClass} ${className}`}>
      <LogoMark customClass={customSvgClass || currentSvgClass} />
    </div>
  );

  if (variant === 'mark') {
    return withBox ? <BoxedLogoMark /> : <LogoMark customClass={className} />;
  }

  const isLight = theme === 'light';
  const textColorHigh = isLight ? 'text-slate-900' : 'text-white';
  const textColorSub = isLight ? 'text-slate-600' : 'text-slate-300';
  const textMuted = isLight ? 'text-slate-400' : 'text-white/40';

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 group ${className}`}>
        {withBox ? (
          <BoxedLogoMark boxClass="w-11 h-11 p-2 rounded-xl" customSvgClass="w-full h-full" />
        ) : (
          <LogoMark customClass="w-10 h-10 flex-shrink-0" />
        )}
        <div className="flex flex-col justify-center select-none">
          <div className="flex items-center gap-1.5 font-black tracking-tight text-lg leading-tight uppercase">
            <span className={textColorHigh}>HIGH</span>
            <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              CLOUD
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.22em] uppercase text-primary">
            <span>SOFT TECH</span>
          </div>
        </div>
      </div>
    );
  }

  // Full Card Lockup on a white rounded square box (matches the uploaded image 1:1)
  if (variant === 'card' || (variant === 'full' && withBox)) {
    return (
      <div className={`bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/25 border border-slate-100/90 flex flex-col items-center text-center select-none max-w-sm mx-auto group ${className}`}>
        {/* 3D Emblem with subtle breathing scale on group hover */}
        <div className="w-40 h-36 flex items-center justify-center mb-4">
          <LogoMark customClass="w-full h-full" />
        </div>
        
        {/* HIGH CLOUD */}
        <div className="flex items-center gap-2.5 font-black text-3xl sm:text-4xl tracking-tight uppercase leading-none">
          <span className="text-slate-900">HIGH</span>
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            CLOUD
          </span>
        </div>

        {/* — SOFT TECH — */}
        <div className="flex items-center gap-3 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#0284C7] mt-3 uppercase w-full justify-center">
          <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full inline-block"></span>
          <span>SOFT TECH</span>
          <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-l from-cyan-400 to-blue-600 rounded-full inline-block"></span>
        </div>

        {/* PRIVATE LIMITED */}
        <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] uppercase text-slate-500 mt-2">
          PRIVATE LIMITED
        </div>

        {/* AI • SOFTWARE • INNOVATION */}
        <div className="flex items-center gap-2.5 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-slate-700 mt-4 pt-3 border-t border-slate-100 w-full justify-center">
          <span>AI</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] inline-block"></span>
          <span>SOFTWARE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] inline-block"></span>
          <span>INNOVATION</span>
        </div>
      </div>
    );
  }

  // Full stacked lockup without card wrapper
  return (
    <div className={`flex flex-col items-center text-center select-none group ${className}`}>
      <BoxedLogoMark boxClass="w-28 h-28 p-3 rounded-2xl mb-4" customSvgClass="w-full h-full" />
      
      {/* HIGH CLOUD */}
      <div className="flex items-center gap-2 font-black text-2xl md:text-3xl tracking-tight uppercase leading-none">
        <span className={textColorHigh}>HIGH</span>
        <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
          CLOUD
        </span>
      </div>

      {/* — SOFT TECH — */}
      <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.25em] text-primary mt-2 uppercase">
        <span className="h-[1.5px] w-6 md:w-8 bg-gradient-to-r from-transparent to-primary inline-block"></span>
        <span>SOFT TECH</span>
        <span className="h-[1.5px] w-6 md:w-8 bg-gradient-to-l from-transparent to-primary inline-block"></span>
      </div>

      {/* PRIVATE LIMITED */}
      <div className={`text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase ${textMuted} mt-1.5`}>
        PRIVATE LIMITED
      </div>

      {/* AI • SOFTWARE • INNOVATION */}
      <div className={`flex items-center gap-3 text-[9px] md:text-[10px] font-semibold tracking-[0.2em] uppercase ${textColorSub} mt-3`}>
        <span>AI</span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
        <span>SOFTWARE</span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
        <span>INNOVATION</span>
      </div>
    </div>
  );
}
