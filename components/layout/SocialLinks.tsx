import { Facebook, Linkedin, Instagram } from "lucide-react"

interface SocialLinksProps {
  variant?: "header" | "footer"
  showText?: boolean
  className?: string
}

export default function SocialLinks({ 
  variant = "header", 
  showText = true, 
  className = "" 
}: SocialLinksProps) {
  const socialData = [
    {
      href: "https://www.facebook.com/CASSISAUDEBR",
      icon: Facebook,
      label: "Facebook"
    },
    {
      href: "https://www.linkedin.com/company/cassi/posts/?feedView=all",
      icon: Linkedin,
      label: "LinkedIn"
    },
    {
      href: "https://www.instagram.com/cassi.saude/",
      icon: Instagram,
      label: "Instagram"
    }
  ]

  const headerStyles = "w-8 h-8 bg-[#002d4b] rounded-full flex items-center justify-center hover:bg-[#135b9e] transition-colors"
  const footerStyles = "w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"

  return (
    <div className={`flex items-center ${variant === "header" ? "w-[346px] h-[24px]" : ""} ${className}`} 
         style={variant === "header" ? { gap: "24px" } : {}}>
      {variant === "header" && showText && (
        <span className="text-sm text-[#2d2d2d] whitespace-nowrap">
          Siga a CASSI nas redes sociais:
        </span>
      )}
      <div className="flex gap-2">
        {socialData.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={variant === "header" ? headerStyles : footerStyles}
            >
              <Icon className={`w-4 h-4 ${variant === "header" ? "text-white" : "text-[#002d4b]"}`} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
