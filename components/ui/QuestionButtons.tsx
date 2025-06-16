import React from 'react'
import Link from 'next/link'
import { Button } from './button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface QuestionButtonsProps {
  question: string
  onYes?: () => void
  onNo?: () => void
  yesLabel?: string
  noLabel?: string
  yesHref?: string
  noHref?: string
  showQuestion?: boolean
  className?: string
}

export default function QuestionButtons({
  question = "Você reconhece a abertura desta NIP?",
  onYes,
  onNo,
  yesLabel = "Sim",
  noLabel = "Não",
  yesHref,
  noHref,
  showQuestion = true,
  className = ""
}: QuestionButtonsProps) {
  const YesButton = () => (
    <Button 
      onClick={onYes}
      className="bg-[#002d4b] hover:bg-[#135b9e] text-white px-8 py-2 rounded"
    >
      {yesLabel}
    </Button>
  )

  const NoButton = () => (
    <Button 
      variant="outline" 
      onClick={onNo}
      className="border-[#d9d9d9] text-[#2d2d2d] hover:bg-[#f9f9f9] px-8 py-2 rounded"
    >
      {noLabel}
    </Button>
  )

  return (
    <div className={`bg-[#f9f9f9] p-6 rounded-lg ${className}`}>
      {showQuestion && (
        <h3 className="text-lg font-semibold text-[#002d4b] mb-6">
          {question}
        </h3>
      )}
      
      <div className="flex gap-4 justify-center">
        {noHref ? (
          <Link href={noHref}>
            <NoButton />
          </Link>
        ) : (
          <NoButton />
        )}
        
        {yesHref ? (
          <Link href={yesHref}>
            <YesButton />
          </Link>
        ) : (
          <YesButton />
        )}
      </div>
    </div>
  )
}
