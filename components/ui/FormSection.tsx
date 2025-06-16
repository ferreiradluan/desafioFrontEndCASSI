interface FormSectionProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  titleClassName?: string
  contentClassName?: string
  required?: boolean
}

export default function FormSection({ 
  title,
  description,
  children,
  className = "",
  titleClassName = "",
  contentClassName = "",
  required = false
}: FormSectionProps) {
  return (
    <div className={`bg-white p-6 rounded-lg border border-[#d9d9d9] ${className}`}>
      {title && (
        <div className="mb-4">
          <h2 className={`text-lg font-semibold text-[#002d4b] ${titleClassName}`}>
            {title}
            {required && <span className="text-red-500 ml-1">*</span>}
          </h2>
          {description && (
            <p className="text-sm text-[#666] mt-1">
              {description}
            </p>
          )}
        </div>
      )}

      <div className={contentClassName}>
        {children}
      </div>
    </div>
  )
}
