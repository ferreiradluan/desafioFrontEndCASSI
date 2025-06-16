import Image from "next/image"

interface LogoProps {
  variant?: "header" | "footer"
  className?: string
}

export default function Logo({ variant = "header", className = "" }: LogoProps) {
  const logoSrc = variant === "footer" 
    ? "/images/cassi-logo-footer.png" 
    : "/images/cassi-logo-figma.png"
  
  const defaultClassName = variant === "header" 
    ? "w-[105.85714721679688px] h-[52px]" 
    : "w-[105.85714721679688px] h-[52px]"

  return (
    <div className="flex items-center">
      <img 
        src={logoSrc} 
        alt="CASSI" 
        className={`${defaultClassName} ${className}`} 
      />
    </div>
  )
}
