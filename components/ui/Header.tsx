"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "./button"
import { Input } from "./input"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
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
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/cassi/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#002d4b] rounded-full flex items-center justify-center hover:bg-[#135b9e] transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cassi.saude/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#002d4b] rounded-full flex items-center justify-center hover:bg-[#135b9e] transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.185-1.537-.737-.941-.737-2.122 0-3.063.737-.941 1.888-1.537 3.185-1.537s2.448.596 3.185 1.537c.737.941.737 2.122 0 3.063-.737.941-1.888 1.537-3.185 1.537zm7.718 0c-1.297 0-2.448-.596-3.185-1.537-.737-.941-.737-2.122 0-3.063.737-.941 1.888-1.537 3.185-1.537s2.448.596 3.185 1.537c.737.941.737 2.122 0 3.063-.737.941-1.888 1.537-3.185 1.537z"/>
                </svg>
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
          </div>          {/* Login Button */}
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
  )
}
