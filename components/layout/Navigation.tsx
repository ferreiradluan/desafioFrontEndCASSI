"use client"

import { useState } from "react"
import Link from "next/link"
import DropdownMenu from "@/components/ui/DropdownMenu"

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const menuData = {
    conheca: [
      { label: "Institucional", href: "#" },
      { label: "Informações financeiras", href: "#" },
      { label: "Governança corporativa", href: "#" },
      { label: "Como trabalhamos", href: "#" },
      { label: "Faça parte da nossa equipe", href: "#" }
    ],
    planos: [
      { label: "Plano CASSI Essencial", href: "#" },
      { label: "Plano CASSI Família", href: "#" },
      { label: "Plano CASSI Vida", href: "#" },
      { label: "Quero contratar", href: "#" },
      { label: "Plano de Associados", href: "#" }
    ],
    tenhoPlano: [
      { label: "Cobertura do meu plano", href: "#" },
      { label: "Cronogramas", href: "#" },
      { label: "Telemedicina", href: "#" }
    ],
    clinicassi: [
      { label: "Atenção Primária Saúde", href: "#" },
      { label: "Localize sua CliniCASSI", href: "#" }
    ]
  }

  return (
    <nav className={`bg-[#ffffff] border-t border-[#d9d9d9] relative ${className}`}>
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="flex items-center justify-center gap-8 py-3">
          <Link href="#" className="text-[#2d2d2d] hover:text-[#135b9e] text-sm font-medium">
            Home
          </Link>

          <DropdownMenu
            label="Conheça a CASSI"
            items={menuData.conheca}
            isOpen={openDropdown === "conheca"}
            onToggle={() => toggleDropdown("conheca")}
          />

          <DropdownMenu
            label="Nossos planos"
            items={menuData.planos}
            isOpen={openDropdown === "planos"}
            onToggle={() => toggleDropdown("planos")}
          />

          <DropdownMenu
            label="Já tenho um plano CASSI"
            items={menuData.tenhoPlano}
            isOpen={openDropdown === "tenho-plano"}
            onToggle={() => toggleDropdown("tenho-plano")}
          />

          <DropdownMenu
            label="CliniCASSI"
            items={menuData.clinicassi}
            isOpen={openDropdown === "clinicassi"}
            onToggle={() => toggleDropdown("clinicassi")}
          />

          <Link href="#" className="text-[#2d2d2d] hover:text-[#135b9e] text-sm font-medium">
            Fale com a CASSI
          </Link>
        </div>
      </div>
    </nav>
  )
}
