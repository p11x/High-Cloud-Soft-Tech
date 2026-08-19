export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={`w-8 h-8 text-primary ${className}`} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1332 20.176 10.2031 17.854 10.0132C17.4116 6.61921 14.498 4 11 4C7.13401 4 4 7.13401 4 11C4 11.238 4.01188 11.4732 4.03487 11.705C2.26127 12.3553 1 14.0326 1 16C1 18.2091 2.79086 20 5 20H17.5V19Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M12 16V9M12 9L9 12M12 9L15 12" />
    </svg>
  );
}
