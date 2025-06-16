import React from 'react'
import { CheckCircle } from "lucide-react"

interface NipConfirmationMessageProps {
  message?: string
  thankYouMessage?: string
  className?: string
}

export default function NipConfirmationMessage({
  message = "Abertura da NIP RECONHECIDA pelo usuário.",
  thankYouMessage = "Obrigado pela resposta!",
  className = ""
}: NipConfirmationMessageProps) {
  return (
    <div className={className}>
      {/* Success Banner */}
      <div className="bg-[#d6fbd0] border border-[#29bb11] rounded-lg p-4 mb-4 flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-[#29bb11]" />
        <span className="text-[#2d2d2d] font-medium">
          {message.includes("RECONHECIDA") ? (
            <>
              Abertura da NIP <strong>RECONHECIDA</strong> pelo usuário.
            </>
          ) : (
            message
          )}
        </span>
      </div>

      {/* Thank you message */}
      <div className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-[#29bb11]" />
        <span className="text-[#29bb11] font-medium">{thankYouMessage}</span>
      </div>
    </div>
  )
}
