"use client"

import React from "react"
import { 
  PageHeader,
  NipCard,
  QuestionCard,
  NavigationButtons,
  DataCard,
  StatusBadge,
  AlertMessage
} from "@/components"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Search, FileText, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="bg-[#134874] text-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <Image
                src="/images/cassi-logo-white.png"
                alt="CASSI Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-[#3b82f6] transition-colors">Home</a>
                <a href="#" className="hover:text-[#3b82f6] transition-colors">Serviços</a>
                <a href="#" className="hover:text-[#3b82f6] transition-colors">Contato</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Buscar..."
                  className="w-64 rounded-md border bg-white/10 py-2 pl-10 pr-4 text-white placeholder:text-gray-300 focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-sm">Lorem Ipsum</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Area */}
          <div className="lg:col-span-2">
            <PageHeader
              title="Olá, Leandro Henrique"
              subtitle="Foi realizada a abertura de uma Notificação de Intermediação Preliminar (NIP) em seu nome."
              titleClassName="text-[#134874]"
            />

            {/* NIP Card */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Notificação de Intermediação Preliminar
                    </h2>
                    <StatusBadge 
                      status="pending" 
                      label="Pendente"
                      icon={<Clock className="w-3 h-3 mr-1" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <DataCard 
                      data={[{ label: "Beneficiário", value: "Leandro Henrique" }]}
                      columns={1}
                    />
                    <DataCard 
                      data={[{ label: "Interlocutor", value: "Leandro Henrique" }]}
                      columns={1}
                    />
                    <DataCard 
                      data={[{ label: "Data de Abertura", value: "29/01/2022" }]}
                      columns={1}
                    />
                  </div>

                  <Separator className="my-6" />

                  <div className="mb-6">
                    <p className="text-gray-900 font-medium mb-4">
                      Você reconhece a abertura desta NIP?
                    </p>
                  </div>

                  <NavigationButtons
                    backLabel="Não reconheço"
                    nextLabel="Sim, foi aberto por mim"
                    backHref="/nao-reconheco"
                    nextHref="/confirmacao"
                    showBackButton={true}
                    showNextButton={true}
                    className="flex flex-col sm:flex-row gap-3"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AlertMessage
              type="info"
              title="Informação"
              message="Na CASSI, buscamos aprimorar continuamente nossos serviços e métodos de atendimento. Nosso objetivo é acelerar o processo de análise das suas solicitações e torná-lo mais eficiente. Ao responder ao questionário, você nos ajuda a alcançar maior assertividade e rapidez no atendimento às suas necessidades."
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#134874] text-white mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                src="/images/cassi-logo-footer.png"
                alt="CASSI Logo"
                width={150}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-gray-300 mb-4">
                Cuidando da sua saúde com excelência e dedicação.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Portal do Beneficiário</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rede Credenciada</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>0800 123 4567</li>
                <li>atendimento@cassi.com.br</li>
                <li>Seg a Sex: 8h às 18h</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-white/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; 2024 CASSI. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
