import React from 'react'
import { AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react"

interface NipStatusMessageProps {
  type: "warning" | "success" | "error" | "info"
  message: string
  className?: string
  showIcon?: boolean
}

export default function NipStatusMessage({ 
  type,
  message,
  className = "",
  showIcon = true
}: NipStatusMessageProps) {
  const icons = {
    warning: <AlertTriangle className="w-5 h-5 text-[#ec1529]" />,
    success: <CheckCircle className="w-5 h-5 text-[#29bb11]" />,
    error: <XCircle className="w-5 h-5 text-[#dc2626]" />,
    info: <Info className="w-5 h-5 text-[#2563eb]" />
  }

  const styles = {
    warning: "bg-[#fbd0d4] border border-[#ec1529]",
    success: "bg-[#dcfce7] border border-[#29bb11]",
    error: "bg-[#fee2e2] border border-[#dc2626]",
    info: "bg-[#dbeafe] border border-[#2563eb]"
  }

  const textColors = {
    warning: "text-[#2d2d2d]",
    success: "text-[#29bb11]",
    error: "text-[#dc2626]",
    info: "text-[#2563eb]"
  }

  return (
    <div className={`${styles[type]} rounded-lg p-4 flex items-center gap-3 ${className}`}>
      {showIcon && icons[type]}
      <span className={`font-medium ${textColors[type]}`} dangerouslySetInnerHTML={{ __html: message }} />
    </div>
  )
}
