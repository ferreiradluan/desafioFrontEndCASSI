import React from 'react'
import NipConfirmationMessage from './NipConfirmationMessage'
import QuestionButtons from './QuestionButtons'
import InterlocutorQuestion from './InterlocutorQuestion'

interface NipData {
  beneficiario: string
  interlocutor: string
  dataAbertura: string
}

interface NipConfirmationCardProps {
  title?: string
  data: NipData
  showConfirmation?: boolean
  confirmationMessage?: string
  thankYouMessage?: string
  showQuestionButtons?: boolean
  questionText?: string
  showInterlocutorQuestion?: boolean
  interlocutorQuestionText?: string
  onYes?: () => void
  onNo?: () => void
  yesHref?: string
  noHref?: string
  onInterlocutorYes?: () => void
  onInterlocutorNo?: () => void
  interlocutorYesHref?: string
  interlocutorNoHref?: string
  className?: string
}

export default function NipConfirmationCard({
  title = "Dados da notificação",
  data,
  showConfirmation = false,
  confirmationMessage,
  thankYouMessage,
  showQuestionButtons = false,
  questionText = "Você reconhece a abertura desta NIP?",
  showInterlocutorQuestion = false,
  interlocutorQuestionText = "Reconhece o interlocutor?",
  onYes,
  onNo,
  yesHref,
  noHref,
  onInterlocutorYes,
  onInterlocutorNo,
  interlocutorYesHref,
  interlocutorNoHref,
  className = ""
}: NipConfirmationCardProps) {
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

      {showConfirmation && (
        <NipConfirmationMessage 
          message={confirmationMessage}
          thankYouMessage={thankYouMessage}
        />
      )}

      {showQuestionButtons && (
        <QuestionButtons
          question={questionText}
          onYes={onYes}
          onNo={onNo}
          yesHref={yesHref}
          noHref={noHref}
          className="mt-6"
        />
      )}

      {showInterlocutorQuestion && (
        <InterlocutorQuestion
          question={interlocutorQuestionText}
          onYes={onInterlocutorYes}
          onNo={onInterlocutorNo}
          yesHref={interlocutorYesHref}
          noHref={interlocutorNoHref}
        />
      )}
    </div>
  )
}
