import { AlertTriangle, CheckCircle, Info, X } from "lucide-react"

interface StatusAlertProps {
  type: "success" | "warning" | "info" | "error"
  message: string
  onClose?: () => void
  className?: string
}

export default function StatusAlert({ 
  type, 
  message, 
  onClose,
  className = "" 
}: StatusAlertProps) {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5" />
      case "warning":
        return <AlertTriangle className="w-5 h-5" />
      case "error":
        return <X className="w-5 h-5" />
      case "info":
      default:
        return <Info className="w-5 h-5" />
    }
  }

  const getStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800"
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-800"
      case "error":
        return "bg-red-50 border-red-200 text-red-800"
      case "info":
      default:
        return "bg-blue-50 border-blue-200 text-blue-800"
    }
  }

  return (
    <div className={`flex items-center gap-3 p-4 border rounded-lg ${getStyles()} ${className}`}>
      {getIcon()}
      <span className="flex-1 text-sm">{message}</span>
      {onClose && (
        <button 
          onClick={onClose}
          className="hover:opacity-70 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
