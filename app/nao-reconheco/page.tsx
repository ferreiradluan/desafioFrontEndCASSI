"use client"

import MainLayout from "@/components/ui/MainLayout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NaoReconhecoPage() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-[#002d4b] mb-4">Olá, {"<nome>"}</h1>
          <p className="text-[#2d2d2d] mb-8">
            Foi realizada a abertura de uma Notificação de Intermediação Preliminar (NIP) em seu nome.
          </p>

          <div className="bg-[#f9f9f9] p-6 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-[#002d4b] mb-4">Dados da notificação</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-[#2d2d2d] mb-2">Beneficiário</h3>
                <p className="text-[#505251]">Leandro Henrique</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#2d2d2d] mb-2">Interlocutor</h3>
                <p className="text-[#505251]">Leandro Henrique</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-[#2d2d2d] mb-2">Data de abertura</h3>
              <p className="text-[#505251]">29/01/2022</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2d2d2d] mb-4">Reconhece o interlocutor?</h3>
              <div className="flex gap-3">
                <Link href="/verificar-contato">
                  <Button variant="outline" className="border-[#d9d9d9] text-[#2d2d2d] hover:bg-[#f9f9f9]">
                    Não
                  </Button>
                </Link>
                <Link href="/verificar-contato-sim">
                  <Button className="bg-[#002d4b] hover:bg-[#135b9e] text-white">Sim</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1">
          <div className="py-6">
            <h2 className="text-lg font-semibold text-[#002d4b] mb-4">
              Por que é importante que você responda esse questionário?
            </h2>
            {/* Imagem de atendimento */}
            <div className="mb-4">
              <img
                src="/images/atendimento-cassi.png"
                alt="Equipe de atendimento CASSI"
                className="w-full max-w-[411px] h-auto rounded-lg"
                style={{ aspectRatio: "411/231" }}
              />
            </div>
            <p className="text-[#2d2d2d] text-sm leading-relaxed">
              Na CASSI, buscamos aprimorar continuamente nossos serviços e métodos de atendimento. Nosso objetivo é
              acelerar o processo de análise das suas solicitações e torná-lo mais eficiente. Ao responder ao
              questionário, você nos ajuda a alcançar maior assertividade e rapidez no atendimento às suas
              necessidades.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
