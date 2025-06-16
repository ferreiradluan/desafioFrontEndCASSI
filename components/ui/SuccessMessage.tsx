import { CheckCircle } from "lucide-react"

interface SuccessMessageProps {
  title?: string
  message: string
  icon?: React.ReactNode
  className?: string
  titleClassName?: string
  messageClassName?: string
  showIcon?: boolean
}

export default function SuccessMessage({ 
  title = "Sucesso!",
  message,
  icon,
  className = "",
  titleClassName = "",
  messageClassName = "",
  showIcon = true
}: SuccessMessageProps) {
  const defaultIcon = <CheckCircle className="w-8 h-8 text-green-500" />

  return (
    <div className={`bg-green-50 border border-green-200 rounded-lg p-6 ${className}`}>
      <div className="flex items-start space-x-3">
        {showIcon && (
          <div className="flex-shrink-0">
            {icon || defaultIcon}
          </div>
        )}
        
        <div className="flex-1">
          {title && (
            <h3 className={`text-lg font-semibold text-green-800 mb-2 ${titleClassName}`}>
              {title}
            </h3>
          )}
          
          <p className={`text-green-700 ${messageClassName}`}>
            {message}
          </p>
        </div>
      </div>
    </div>
  )
}
