import { Button } from "@/components/ui/button"
import Logo from "./Logo"
import SearchBox from "./SearchBox"
import SocialLinks from "./SocialLinks"
import UserSection from "./UserSection"
import Navigation from "./Navigation"

interface HeaderProps {
  userName?: string
  className?: string
}

export default function Header({ userName = "Lorem Ipsum", className = "" }: HeaderProps) {
  return (
    <header className={`border-b border-[#d9d9d9] bg-[#ffffff] ${className}`}>
      {/* Top Header */}
      <div className="w-full max-w-[1280px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center relative gap-2">
          <Logo variant="header" className="ml-2" />
        </div>

        {/* Center Section - Search */}
        <SearchBox />

        {/* Right Section - Social + User + Login */}
        <div className="flex items-center gap-6">
          {/* Social Section */}
          <SocialLinks variant="header" showText={true} />

          {/* User Section */}
          <UserSection userName={userName} />

          {/* Login Button */}
          <Button className="bg-[#002d4b] hover:bg-[#135b9e] text-white rounded-[4px] w-[112px] h-[40px] text-sm font-medium">
            Fazer login
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </header>
  )
}
