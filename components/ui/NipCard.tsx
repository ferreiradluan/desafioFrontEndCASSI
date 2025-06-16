import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NipData {
  beneficiario: string
  interlocutor: string
  dataAbertura: string
}

interface NipActionButton {
  label: string
  href: string
  variant?: "default" | "outline"
}

interface NipCardProps {
  title?: string
  data: NipData
  questionText?: string
  buttons?: NipActionButton[]
  children?: React.ReactNode
  className?: string
}

export default function NipCard({ 
  title = "Dados do notificação", 
  data, 
  questionText = "Reconhece esta NIP?",
  buttons = [],
  children,
  className = "" 
}: NipCardProps) {
  return (
    <div className={`bg-[#f9f9f9] p-6 rounded-lg mb-6 ${className}`}>
      <h2 className="text-lg font-semibold text-[#002d4b] mb-4">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold text-[#2d2d2d] mb-2">Beneficiário</h3>
          <p className="text-[#505251]">{data.beneficiario}</p>
        </div>
        <div>
          <h3 className="font-semibold text-[#2d2d2d] mb-2">Interlocutor</h3>
          <p className="text-[#505251]">{data.interlocutor}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-[#2d2d2d] mb-2">Data de abertura</h3>
        <p className="text-[#505251]">{data.dataAbertura}</p>
      </div>

      {questionText && buttons.length > 0 && (
        <div>
          <h3 className="font-semibold text-[#2d2d2d] mb-4">{questionText}</h3>
          <div className="flex gap-3">
            {buttons.map((button, index) => (
              <Link key={index} href={button.href}>
                <Button 
                  variant={button.variant || "default"}
                  className={
                    button.variant === "outline" 
                      ? "border-[#d9d9d9] text-[#2d2d2d] hover:bg-[#f9f9f9]"
                      : "bg-[#002d4b] hover:bg-[#135b9e] text-white"
                  }
                >
                  {button.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}

      {children}
    </div>
  )
}
