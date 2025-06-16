"use client"

import { useState } from "react"
import MainLayout from "@/components/ui/MainLayout"
import PageHeader from "@/components/ui/PageHeader"
import NipDataCard from "@/components/ui/NipDataCard"
import InfoSidebar from "@/components/ui/InfoSidebar"
import ContactVerificationModal from "@/components/ui/ContactVerificationModal"

export default function VerificarContatoSimPage() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <MainLayout>
      {/* Background Content (Dimmed when modal is open) */}
      <div className={isModalOpen ? "opacity-30 pointer-events-none" : ""}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <PageHeader 
              title="Olá, <nome>"
              subtitle="Foi realizada a abertura de uma Notificação de Intermediação Preliminar (NIP) em seu nome."
            />
            <NipDataCard />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <InfoSidebar>
              <p className="text-[#2d2d2d] text-sm leading-relaxed">
                Na CASSI, buscamos aprimorar continuamente nossos serviços e métodos de atendimento. Nosso objetivo
                é acelerar o processo de análise das suas solicitações e torná-lo mais eficiente. Ao responder ao
                questionário, você nos ajuda a alcançar maior assertividade e rapidez no atendimento às suas
                necessidades.
              </p>
            </InfoSidebar>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <ContactVerificationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </MainLayout>
  )
}
