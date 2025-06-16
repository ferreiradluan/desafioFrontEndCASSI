interface MainContentWithSidebarProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  sidebar?: React.ReactNode
  className?: string
}

export default function MainContentWithSidebar({ 
  title, 
  subtitle, 
  children,
  sidebar,
  className = "" 
}: MainContentWithSidebarProps) {
  return (
    <div className="bg-[#f9f9f9]">
      <main className={`max-w-7xl mx-auto px-4 py-8 ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {title && (
              <h1 className="text-2xl font-bold text-[#002d4b] mb-4">{title}</h1>
            )}
            {subtitle && (
              <p className="text-[#2d2d2d] mb-8">{subtitle}</p>
            )}
            {children}
          </div>

          {/* Right Column - Sidebar */}
          {sidebar && (
            <div className="lg:col-span-1">
              {sidebar}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
