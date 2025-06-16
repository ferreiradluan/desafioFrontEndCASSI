import { Facebook, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
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
  )
}
