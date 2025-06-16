import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ActionButton {
  label: string
  href: string
  variant?: "default" | "outline"
}

interface ActionButtonsProps {
  title: string
  buttons: ActionButton[]
  className?: string
}

export default function ActionButtons({ title, buttons, className = "" }: ActionButtonsProps) {
  return (
    <div className={className}>
      <h3 className="font-semibold text-[#2d2d2d] mb-4">{title}</h3>
      <div className="flex gap-3">
        {buttons.map((button, index) => (
          <Link key={index} href={button.href}>
            <Button 
              variant={button.variant || "default"}
              className={
                button.variant === "outline" 
                  ? "border-[#d9d9d9] text-[#2d2d2d] hover:bg-[#f9f9f9]"
                  : "bg-[#002d4b] hover:bg-[#135b9e] text-white"
              }
            >
              {button.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}
