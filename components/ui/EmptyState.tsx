import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  actionHref?: string
  className?: string
  iconClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

export default function EmptyState({ 
  icon,
  title,
  description,
  actionLabel,
  onAction,
  actionHref,
  className = "",
  iconClassName = "",
  titleClassName = "",
  descriptionClassName = ""
}: EmptyStateProps) {
  const defaultIcon = (
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </div>
  )

  return (
    <div className={`text-center py-12 px-4 ${className}`}>
      <div className={`mb-4 flex justify-center ${iconClassName}`}>
        {icon || defaultIcon}
      </div>
      
      <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${titleClassName}`}>
        {title}
      </h3>
      
      {description && (
        <p className={`text-gray-500 mb-6 max-w-md mx-auto ${descriptionClassName}`}>
          {description}
        </p>
      )}

      {(actionLabel && (onAction || actionHref)) && (
        <div>
          {actionHref ? (
            <a href={actionHref}>
              <Button className="bg-[#002d4b] hover:bg-[#135b9e] text-white">
                {actionLabel}
              </Button>
            </a>
          ) : (
            <Button 
              onClick={onAction}
              className="bg-[#002d4b] hover:bg-[#135b9e] text-white"
            >
              {actionLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
