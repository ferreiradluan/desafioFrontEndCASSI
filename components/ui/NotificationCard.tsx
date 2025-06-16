interface NotificationData {
  beneficiario: string
  interlocutor: string
  dataAbertura: string
}

interface NotificationCardProps {
  title?: string
  data: NotificationData
  children?: React.ReactNode
  className?: string
}

export default function NotificationCard({ 
  title = "Dados do notificação", 
  data, 
  children,
  className = "" 
}: NotificationCardProps) {
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

      {children}
    </div>
  )
}
