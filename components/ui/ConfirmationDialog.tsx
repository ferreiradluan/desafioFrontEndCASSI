"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface ConfirmationDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  variant?: "default" | "destructive"
  className?: string
}

export default function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  variant = "default",
  className = ""
}: ConfirmationDialogProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-full max-w-md z-50 ${className}`}>
        <h2 className="text-lg font-semibold text-[#002d4b] mb-3">
          {title}
        </h2>
        
        <p className="text-[#2d2d2d] mb-6">
          {message}
        </p>
        
        <div className="flex justify-end gap-3">
          <Button 
            variant="outline"
            onClick={onClose}
            className="border-[#d9d9d9] text-[#2d2d2d] hover:bg-[#f9f9f9]"
          >
            {cancelText}
          </Button>
          <Button 
            onClick={handleConfirm}
            className={
              variant === "destructive" 
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-[#002d4b] hover:bg-[#135b9e] text-white"
            }
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </>
  )
}
