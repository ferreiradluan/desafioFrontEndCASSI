import { Button } from "@/components/ui/button"

interface LoadingProps {
  text?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function Loading({ 
  text = "Carregando...", 
  size = "md",
  className = "" 
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  }

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-2 border-[#002d4b] border-t-transparent rounded-full animate-spin`}
      />
      {text && (
        <span className="text-[#2d2d2d] text-sm">{text}</span>
      )}
    </div>
  )
}
