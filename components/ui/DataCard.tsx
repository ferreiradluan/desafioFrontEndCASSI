import React from 'react'

interface DataItem {
  label: string
  value: string
  span?: number // for grid spanning
}

interface DataCardProps {
  title?: string
  data: DataItem[]
  columns?: number
  className?: string
  headerClassName?: string
  itemClassName?: string
  children?: React.ReactNode
}

export default function DataCard({ 
  title,
  data,
  columns = 2,
  className = "",
  headerClassName = "",
  itemClassName = "",
  children
}: DataCardProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }[columns] || "grid-cols-1 md:grid-cols-2"

  return (
    <div className={`bg-white p-6 rounded-lg border border-[#d9d9d9] ${className}`}>
      {title && (
        <h2 className={`text-lg font-semibold text-[#002d4b] mb-4 ${headerClassName}`}>
          {title}
        </h2>
      )}

      <div className={`grid ${gridCols} gap-4 mb-4`}>
        {data.map((item, index) => (
          <div 
            key={index} 
            className={`${item.span ? `md:col-span-${item.span}` : ""} ${itemClassName}`}
          >
            <h3 className="font-semibold text-[#2d2d2d] mb-1 text-sm">
              {item.label}
            </h3>
            <p className="text-[#505251] text-sm">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {children}
    </div>
  )
}
