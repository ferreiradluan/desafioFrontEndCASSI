import { Button } from "@/components/ui/button"

interface QuestionOption {
  label: string
  value: string
  variant?: "default" | "outline"
}

interface QuestionCardProps {
  question: string
  description?: string
  options: QuestionOption[]
  onSelect: (value: string) => void
  selectedValue?: string
  className?: string
  questionClassName?: string
  descriptionClassName?: string
  optionsClassName?: string
  disabled?: boolean
}

export default function QuestionCard({ 
  question,
  description,
  options,
  onSelect,
  selectedValue,
  className = "",
  questionClassName = "",
  descriptionClassName = "",
  optionsClassName = "",
  disabled = false
}: QuestionCardProps) {
  return (
    <div className={`bg-white p-6 rounded-lg border border-[#d9d9d9] ${className}`}>
      <h3 className={`font-semibold text-[#2d2d2d] mb-4 ${questionClassName}`}>
        {question}
      </h3>

      {description && (
        <p className={`text-[#666] mb-4 text-sm ${descriptionClassName}`}>
          {description}
        </p>
      )}

      <div className={`flex gap-3 flex-wrap ${optionsClassName}`}>
        {options.map((option, index) => (
          <Button
            key={index}
            variant={option.variant || "default"}
            onClick={() => !disabled && onSelect(option.value)}
            disabled={disabled}
            className={`
              ${option.variant === "outline" 
                ? "border-[#d9d9d9] text-[#2d2d2d] hover:bg-[#f9f9f9]" 
                : "bg-[#002d4b] hover:bg-[#135b9e] text-white"
              }
              ${selectedValue === option.value 
                ? option.variant === "outline"
                  ? "bg-[#f9f9f9] border-[#002d4b]"
                  : "bg-[#135b9e]"
                : ""
              }
            `}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
