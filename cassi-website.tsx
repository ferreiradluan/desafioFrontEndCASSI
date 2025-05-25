"use client"

import { Facebook, Linkedin, Instagram, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import AppIcon from "./components/AppIcon"

export default function Component() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="border-b border-[#d9d9d9] bg-[#ffffff]">
        {/* Top Header */}
        <div className="w-full max-w-[1280px] mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center relative gap-4">
            <img src="/images/cassi-logo-figma.png" alt="CASSI" className="w-[105.85714721679688px] h-[52px]" />
          
          </div>

          {/* Center Section - Search */}
          <div className="flex-1 flex justify-center max-w-md mx-8">
            <div className="relative w-[186px]">
              <img
                src="/images/search-icon.png"
                alt="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[26px] h-[26px]"
              />
              <Input
                placeholder="Faça sua busca aqui"
                className="pl-12 w-full h-[50px] rounded-[4px] border border-[#d9d9d9] text-sm"
              />
            </div>
          </div>

          {/* Right Section - Social + User + Login */}
          <div className="flex items-center gap-6">
            {/* Social Section */}
            <div className="flex items-center w-[346px] h-[24px]" style={{ gap: "24px" }}>
              <span className="text-sm text-[#2d2d2d] whitespace-nowrap">Siga a CASSI nas redes sociais:</span>
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com/CASSISAUDEBR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#002d4b] rounded-full flex items-center justify-center hover:bg-[#135b9e] transition-colors"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/cassi/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#002d4b] rounded-full flex items-center justify-center hover:bg-[#135b9e] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/cassi.saude/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#002d4b] rounded-full flex items-center justify-center hover:bg-[#135b9e] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* User Section - Icon + Lorem Ipsum */}
            <div
              className="flex items-center bg-[#ffffff] rounded-[4px] w-[178.8300018310547px] h-[56.37060546875px]"
              style={{
                gap: "10px",
                paddingTop: "13px",
                paddingRight: "26px",
                paddingBottom: "13px",
                paddingLeft: "26px",
              }}
            >
              <img
                src="/images/user-icon.png"
                alt="User"
                className="w-[22.829999923706055px] h-[30.370607376098633px]"
              />
              <span className="text-sm text-[#2d2d2d] whitespace-nowrap">Lorem Ipsum</span>
            </div>

            {/* Login Button */}
            <Button className="bg-[#002d4b] hover:bg-[#135b9e] text-white rounded-[4px] w-[112px] h-[40px] text-sm font-medium">
              Fazer login
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-[#ffffff] border-t border-[#d9d9d9] relative">
          <div className="w-full max-w-[1280px] mx-auto px-4">
            <div className="flex items-center justify-center gap-8 py-3">
              <Link href="#" className="text-[#2d2d2d] hover:text-[#135b9e] text-sm font-medium">
                Home
              </Link>

              {/* Conheça a CASSI Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("conheca")}
                  className="flex items-center gap-1 text-[#2d2d2d] hover:text-[#135b9e] text-sm font-medium"
                >
                  Conheça a CASSI
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "conheca" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "conheca" && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-[#d9d9d9] rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Institucional</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Informações financeiras</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Governança corporativa</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Como trabalhamos</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Faça parte da nossa equipe</Link>
                  </div>
                )}
              </div>

              {/* Nossos planos Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("planos")}
                  className="flex items-center gap-1 text-[#2d2d2d] hover:text-[#135b9e] text-sm font-medium"
                >
                  Nossos planos
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "planos" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "planos" && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-[#d9d9d9] rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Plano CASSI Essencial</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Plano CASSI Família</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Plano CASSI Vida</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Quero contratar</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Plano de Associados</Link>
                  </div>
                )}
              </div>

              {/* Já tenho um plano CASSI Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("tenho-plano")}
                  className="flex items-center gap-1 text-[#2d2d2d] hover:text-[#135b9e] text-sm font-medium"
                >
                  Já tenho um plano CASSI
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "tenho-plano" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "tenho-plano" && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-[#d9d9d9] rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Cobertura do meu plano</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Cronogramas</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Telemedicina</Link>
                  </div>
                )}
              </div>

              {/* CliniCASSI Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("clinicassi")}
                  className="flex items-center gap-1 text-[#2d2d2d] hover:text-[#135b9e] text-sm font-medium"
                >
                  CliniCASSI
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "clinicassi" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "clinicassi" && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-[#d9d9d9] rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Atenção Primária Saúde</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]">Localize sua CliniCASSI</Link>
                  </div>
                )}
              </div>

              <Link href="#" className="text-[#2d2d2d] hover:text-[#135b9e] text-sm font-medium">
                Fale com a CASSI
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="bg-[#f9f9f9]">
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold text-[#002d4b] mb-4">Olá, {"<nome>"}</h1>
              <p className="text-[#2d2d2d] mb-8">
                Foi realizada a abertura de uma Notificação de Intermediação Preliminar (NIP) em seu nome.
              </p>

              <div className="bg-[#f9f9f9] p-6 rounded-lg mb-6">
                <h2 className="text-lg font-semibold text-[#002d4b] mb-4">Dados do notificação</h2>

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
                  <h3 className="font-semibold text-[#2d2d2d] mb-4">Reconhece esta NIP?</h3>
                  <div className="flex gap-3">
                    <Link href="/nao-reconheco">
                      <Button variant="outline" className="border-[#d9d9d9] text-[#2d2d2d] hover:bg-[#f9f9f9]">
                        Não reconheço
                      </Button>
                    </Link>
                    <Link href="/confirmacao">
                      <Button className="bg-[#002d4b] hover:bg-[#135b9e] text-white">Sim, foi aberto por mim</Button>
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
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#002d4b] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex justify-between items-start mb-8">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/images/cassi-logo-footer.png" alt="CASSI" className="w-[105.85714721679688px] h-[52px]" />
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/CASSISAUDEBR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#002d4b]" />
              </a>
              <a
                href="https://www.linkedin.com/company/cassi/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#002d4b]" />
              </a>
              <a
                href="https://www.instagram.com/cassi.saude/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#002d4b]" />
              </a>
            </div>
          </div>

          <hr className="border-[#FCFC1B] mb-8" />

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold mb-4 underline">Home</h3>
            </div>

            <div>
              <h3 className="font-semibold mb-4 underline">Conheça a CASSI</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Institucional
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Informações financeiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Governança corporativa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Como trabalhamos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Faça parte da nossa equipe
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 underline">Nossos Planos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Plano CASSI Essencial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Plano CASSI Família
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Plano CASSI Vida
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Quero contratar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Plano de Associados
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 underline">Já tenho um plano CASSI</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Cobertura do meu plano
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Cronogramas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Telemedicina
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 underline">CliniCASSI</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Atenção Primária Saúde
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fcfc1b]">
                    Localize sua CliniCASSI
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
