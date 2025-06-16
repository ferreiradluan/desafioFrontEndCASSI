import React from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: { label: string; href?: string }[]
  actions?: React.ReactNode
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export default function PageHeader({ 
  title,
  subtitle,
  breadcrumbs,
  actions,
  className = "",
  titleClassName = "",
  subtitleClassName = ""
}: PageHeaderProps) {
  return (
    <div className={`mb-6 ${className}`}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="mb-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-gray-400">/</span>
                )}
                {crumb.href ? (
                  <a 
                    href={crumb.href}
                    className="text-[#135b9e] hover:text-[#002d4b] hover:underline"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-gray-500">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="flex items-start justify-between">
        <div>
          <h1 className={`text-2xl font-bold text-[#002d4b] ${titleClassName}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-[#2d2d2d] mt-2 ${subtitleClassName}`}>
              {subtitle}
            </p>
          )}
        </div>

        {actions && (
          <div className="flex-shrink-0 ml-4">
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}
