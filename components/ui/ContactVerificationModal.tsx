"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

interface ContactVerificationModalProps {
  isOpen: boolean
  onClose?: () => void
}

export default function ContactVerificationModal({ isOpen, onClose }: ContactVerificationModalProps) {
  const [email, setEmail] = useState("leandro.henrique@gmail.com")
  const [celular, setCelular] = useState("(61) 9 9999-9999")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
        <h2 className="text-xl font-semibold text-[#2d2d2d] mb-4">Verificar dados de contato</h2>

        <p className="text-[#2d2d2d] text-sm mb-6 leading-relaxed">
          Considerando que você não reconheceu a Notificação de Intermediação Preliminar (NIP), a CASSI entrará em
          contato para compreender melhor a situação. Por favor, verifique as informações abaixo e, se necessário,
          atualize-as:
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2d2d2d] mb-2">Beneficiário</label>
            <Input value="Leandro Henrique" className="w-full bg-[#d9d9d9] border-[#d9d9d9]" readOnly />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#2d2d2d] mb-2">E-mail</label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-[#d9d9d9]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2d2d2d] mb-2">Celular</label>
              <Input
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                className="w-full border-[#d9d9d9]"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-8 justify-end">
          <Link href="/nao-reconheco">
            <Button variant="outline" className="border-[#d9d9d9] text-[#2d2d2d] hover:bg-[#f9f9f9]">
              Voltar
            </Button>
          </Link>
          <Link href="/confirmacao-reconhecido">
            <Button className="bg-[#002d4b] hover:bg-[#135b9e] text-white">Confirmar dados</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
