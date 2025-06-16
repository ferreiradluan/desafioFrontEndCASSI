"use client"

import MainLayout from "@/components/ui/MainLayout"
import PageHeader from "@/components/ui/PageHeader"
import NipConfirmationCard from "@/components/ui/NipConfirmationCard"
import InfoSidebar from "@/components/ui/InfoSidebar"

export default function ConfirmacaoReconhecidoPage() {
  const nipData = {
    beneficiario: "Leandro Henrique",
    interlocutor: "Leandro Henrique", 
    dataAbertura: "29/01/2022"
  }

  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <PageHeader 
            title="Olá, <nome>"
            subtitle="Foi realizada a abertura de uma Notificação de Intermediação Preliminar (NIP) em seu nome."
          />
          
          <NipConfirmationCard 
            data={nipData}
            showConfirmation={true}
            confirmationMessage="Interlocutor <strong>RECONHECIDO</strong> e abertura da NIP <strong>NÃO RECONHECIDA</strong> pelo usuário."
            thankYouMessage="Obrigado pela resposta!"
          />
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
    </MainLayout>
  )
}
