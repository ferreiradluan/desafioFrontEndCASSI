import Link from "next/link"
import Logo from "./Logo"
import SocialLinks from "./SocialLinks"

interface FooterProps {
  className?: string
}

export default function Footer({ className = "" }: FooterProps) {
  const footerSections = [
    {
      title: "Home",
      links: []
    },
    {
      title: "Conheça a CASSI",
      links: [
        { label: "Institucional", href: "#" },
        { label: "Informações financeiras", href: "#" },
        { label: "Governança corporativa", href: "#" },
        { label: "Como trabalhamos", href: "#" },
        { label: "Faça parte da nossa equipe", href: "#" }
      ]
    },
    {
      title: "Nossos Planos",
      links: [
        { label: "Plano CASSI Essencial", href: "#" },
        { label: "Plano CASSI Família", href: "#" },
        { label: "Plano CASSI Vida", href: "#" },
        { label: "Quero contratar", href: "#" },
        { label: "Plano de Associados", href: "#" }
      ]
    },
    {
      title: "Já tenho um plano CASSI",
      links: [
        { label: "Cobertura do meu plano", href: "#" },
        { label: "Cronogramas", href: "#" },
        { label: "Telemedicina", href: "#" }
      ]
    },
    {
      title: "CliniCASSI",
      links: [
        { label: "Atenção Primária Saúde", href: "#" },
        { label: "Localize sua CliniCASSI", href: "#" }
      ]
    }
  ]

  return (
    <footer className={`bg-[#002d4b] text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-start mb-8">
          {/* Logo */}
          <Logo variant="footer" />

          {/* Social Icons */}
          <SocialLinks variant="footer" showText={false} className="gap-3" />
        </div>

        <hr className="border-[#FCFC1B] mb-8" />

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 underline">{section.title}</h3>
              {section.links.length > 0 && (
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="hover:text-[#fcfc1b]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
