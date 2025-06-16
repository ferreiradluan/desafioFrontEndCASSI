import { ChevronDown } from "lucide-react"
import Link from "next/link"

interface DropdownItem {
  label: string
  href: string
}

interface DropdownMenuProps {
  label: string
  items: DropdownItem[]
  isOpen: boolean
  onToggle: () => void
  className?: string
}

export default function DropdownMenu({ 
  label, 
  items, 
  isOpen, 
  onToggle, 
  className = "" 
}: DropdownMenuProps) {
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-[#2d2d2d] hover:text-[#135b9e] text-sm font-medium"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-[#d9d9d9] rounded-lg shadow-lg py-2 min-w-[200px] z-50">
          {items.map((item, index) => (
            <Link 
              key={index}
              href={item.href} 
              className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#f9f9f9] hover:text-[#135b9e]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
