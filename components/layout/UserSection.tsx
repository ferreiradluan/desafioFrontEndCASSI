interface UserSectionProps {
  userName?: string
  className?: string
}

export default function UserSection({ 
  userName = "Lorem Ipsum", 
  className = "" 
}: UserSectionProps) {
  return (
    <div
      className={`flex items-center bg-[#ffffff] rounded-[4px] w-[178.8300018310547px] h-[56.37060546875px] ${className}`}
      style={{
        gap: "10px",
        paddingTop: "13px",
        paddingRight: "26px",
        paddingBottom: "13px",
        paddingLeft: "26px",
      }}
    >
      <img
        src="/images/user-icon.png"
        alt="User"
        className="w-[22.829999923706055px] h-[30.370607376098633px]"
      />
      <span className="text-sm text-[#2d2d2d] whitespace-nowrap">{userName}</span>
    </div>
  )
}
