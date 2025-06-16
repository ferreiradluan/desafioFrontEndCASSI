import React from 'react'
import Link from 'next/link'
import { Button } from './button'

interface InterlocutorQuestionProps {
  question?: string
  onYes?: () => void
  onNo?: () => void
  yesLabel?: string
  noLabel?: string
  yesHref?: string
  noHref?: string
  className?: string
}

export default function InterlocutorQuestion({
  question = "Reconhece o interlocutor?",
  onYes,
  onNo,
  yesLabel = "Sim",
  noLabel = "Não",
  yesHref,
  noHref,
  className = ""
}: InterlocutorQuestionProps) {
  const YesButton = () => (
    <Button 
      onClick={onYes}
      className="bg-[#002d4b] hover:bg-[#135b9e] text-white"
    >
      {yesLabel}
    </Button>
  )

  const NoButton = () => (
    <Button 
      variant="outline" 
      onClick={onNo}
      className="border-[#d9d9d9] text-[#2d2d2d] hover:bg-[#f9f9f9]"
    >
      {noLabel}
    </Button>
  )

  return (
    <div className={className}>
      <h3 className="font-semibold text-[#2d2d2d] mb-4">{question}</h3>
      <div className="flex gap-3">
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
