import React from 'react'
import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react"

interface AlertMessageProps {
  type?: "info" | "success" | "warning" | "error"
  title?: string
  message: string
  onClose?: () => void
  className?: string
  showIcon?: boolean
  actions?: React.ReactNode
}

export default function AlertMessage({ 
  type = "info",
  title,
  message,
  onClose,
  className = "",
  showIcon = true,
  actions
}: AlertMessageProps) {
  const icons = {
    info: <Info className="w-5 h-5" />,
    success: <CheckCircle className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />
  }

  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800", 
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800"
  }

  const iconColors = {
    info: "text-blue-500",
    success: "text-green-500",
    warning: "text-yellow-500", 
    error: "text-red-500"
  }

  return (
    <div className={`border rounded-lg p-4 ${styles[type]} ${className}`}>
      <div className="flex items-start">
        {showIcon && (
          <div className={`flex-shrink-0 mr-3 ${iconColors[type]}`}>
            {icons[type]}
          </div>
        )}
        
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-1">
              {title}
            </h4>
          )}
          
          <p className="text-sm">
            {message}
          </p>

          {actions && (
            <div className="mt-3">
              {actions}
            </div>
          )}
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-3 text-gray-400 hover:text-gray-600"
          >
            <XCircle className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
