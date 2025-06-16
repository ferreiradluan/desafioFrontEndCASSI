import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationButtonsProps {
  onBack?: () => void
  onNext?: () => void
  backLabel?: string
  nextLabel?: string
  backHref?: string
  nextHref?: string
  showBackButton?: boolean
  showNextButton?: boolean
  nextDisabled?: boolean
  backDisabled?: boolean
  className?: string
  alignment?: "left" | "center" | "right" | "between"
  size?: "sm" | "md" | "lg"
}

export default function NavigationButtons({ 
  onBack,
  onNext,
  backLabel = "Voltar",
  nextLabel = "Continuar",
  backHref,
  nextHref,
  showBackButton = true,
  showNextButton = true,
  nextDisabled = false,
  backDisabled = false,
  className = "",
  alignment = "between",
  size = "md"
}: NavigationButtonsProps) {
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center", 
    right: "justify-end",
    between: "justify-between"
  }

  const buttonSizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  }

  const BackButton = () => {
    const buttonContent = (
      <Button 
        variant="outline"
        disabled={backDisabled}
        onClick={onBack}
        className={`border-[#d9d9d9] text-[#2d2d2d] hover:bg-[#f9f9f9] ${buttonSizes[size]} flex items-center gap-2`}
      >
        <ArrowLeft className="w-4 h-4" />
        {backLabel}
      </Button>
    )

    if (backHref && !backDisabled) {
      return <a href={backHref}>{buttonContent}</a>
    }

    return buttonContent
  }

  const NextButton = () => {
    const buttonContent = (
      <Button 
        disabled={nextDisabled}
        onClick={onNext}
        className={`bg-[#002d4b] hover:bg-[#135b9e] text-white ${buttonSizes[size]} flex items-center gap-2`}
      >
        {nextLabel}
        <ArrowRight className="w-4 h-4" />
      </Button>
    )

    if (nextHref && !nextDisabled) {
      return <a href={nextHref}>{buttonContent}</a>
    }

    return buttonContent
  }

  return (
    <div className={`flex ${alignmentClasses[alignment]} gap-3 ${className}`}>
      {showBackButton && <BackButton />}
      {showNextButton && <NextButton />}
    </div>
  )
}
