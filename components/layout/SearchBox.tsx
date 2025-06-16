import { Input } from "@/components/ui/input"

interface SearchBoxProps {
  placeholder?: string
  className?: string
}

export default function SearchBox({ 
  placeholder = "Faça sua busca aqui", 
  className = "" 
}: SearchBoxProps) {
  return (
    <div className="flex-1 flex justify-center max-w-md mx-8">
      <div className={`relative w-[186px] ${className}`}>
        <img
          src="/images/search-icon.png"
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[26px] h-[26px]"
        />
        <Input
          placeholder={placeholder}
          className="pl-12 w-full h-[50px] rounded-[4px] border border-[#d9d9d9] text-sm"
        />
      </div>
    </div>
  )
}
