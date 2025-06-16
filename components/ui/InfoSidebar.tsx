import React from 'react'

interface InfoSidebarProps {
  title?: string
  imageSrc?: string
  imageAlt?: string
  children: React.ReactNode
  className?: string
}

export default function InfoSidebar({ 
  title = "Por que é importante que você responda esse questionário?", 
  imageSrc = "/images/atendimento-cassi.png",
  imageAlt = "Equipe de atendimento CASSI",
  children,
  className = "" 
}: InfoSidebarProps) {
  return (
    <div className={`py-6 ${className}`}>
      <h2 className="text-lg font-semibold text-[#002d4b] mb-4">
        {title}
      </h2>
      
      {/* Imagem de atendimento */}
      <div className="mb-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-[411px] h-auto rounded-lg"
          style={{ aspectRatio: "411/231" }}
        />
      </div>
      
      {children}
    </div>
  )
}
