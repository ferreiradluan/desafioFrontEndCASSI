interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  color?: string
  message?: string
  className?: string
  fullScreen?: boolean
}

export default function LoadingSpinner({ 
  size = "md",
  color = "#002d4b",
  message,
  className = "",
  fullScreen = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  }

  const spinner = (
    <div className={`animate-spin rounded-full border-2 border-gray-200 ${sizeClasses[size]}`}>
      <div 
        className="rounded-full border-2 border-transparent border-t-current"
        style={{ borderTopColor: color }}
      ></div>
    </div>
  )

  const content = (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {spinner}
      {message && (
        <p className="text-sm text-gray-600">
          {message}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
        {content}
      </div>
    )
  }

  return content
}
