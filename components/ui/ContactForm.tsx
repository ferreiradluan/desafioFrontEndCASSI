"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface ContactFormData {
  email: string
  celular: string
}

interface ContactFormProps {
  initialData?: ContactFormData
  onSubmit?: (data: ContactFormData) => void
  submitLabel?: string
  submitHref?: string
  className?: string
}

export default function ContactForm({ 
  initialData = { email: "", celular: "" },
  onSubmit,
  submitLabel = "Continuar",
  submitHref = "#",
  className = "" 
}: ContactFormProps) {
  const [email, setEmail] = useState(initialData.email)
  const [celular, setCelular] = useState(initialData.celular)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit({ email, celular })
    }
  }

  return (
    <div className={`bg-white p-6 rounded-lg border border-[#d9d9d9] ${className}`}>
      <h2 className="text-lg font-semibold text-[#002d4b] mb-4">
        Confirme seus dados de contato
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#2d2d2d] mb-1">
            E-mail
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-[#d9d9d9] rounded-[4px]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#2d2d2d] mb-1">
            Celular
          </label>
          <Input
            type="tel"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            className="w-full border-[#d9d9d9] rounded-[4px]"
          />
        </div>
        
        <Button 
          type="submit"
          className="w-full bg-[#002d4b] hover:bg-[#135b9e] text-white rounded-[4px] mt-6"
        >
          {submitLabel}
        </Button>
      </form>
    </div>
  )
}
