import React from 'react'

interface StatusBadgeProps {
  status: "success" | "warning" | "error" | "info" | "pending"
  label: string
  size?: "sm" | "md" | "lg"
  variant?: "solid" | "outline" | "subtle"
  className?: string
  icon?: React.ReactNode
}

export default function StatusBadge({ 
  status,
  label,
  size = "md",
  variant = "solid",
  className = "",
  icon
}: StatusBadgeProps) {
  const baseClasses = "inline-flex items-center font-medium rounded-full"
  
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm", 
    lg: "px-4 py-2 text-base"
  }

  const statusClasses = {
    success: {
      solid: "bg-green-500 text-white",
      outline: "border border-green-500 text-green-500 bg-transparent",
      subtle: "bg-green-100 text-green-800"
    },
    warning: {
      solid: "bg-yellow-500 text-white",
      outline: "border border-yellow-500 text-yellow-500 bg-transparent", 
      subtle: "bg-yellow-100 text-yellow-800"
    },
    error: {
      solid: "bg-red-500 text-white",
      outline: "border border-red-500 text-red-500 bg-transparent",
      subtle: "bg-red-100 text-red-800"
    },
    info: {
      solid: "bg-blue-500 text-white",
      outline: "border border-blue-500 text-blue-500 bg-transparent",
      subtle: "bg-blue-100 text-blue-800"
    },
    pending: {
      solid: "bg-gray-500 text-white",
      outline: "border border-gray-500 text-gray-500 bg-transparent",
      subtle: "bg-gray-100 text-gray-800"
    }
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${statusClasses[status][variant]} ${className}`

  return (
    <span className={classes}>
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </span>
  )
}
