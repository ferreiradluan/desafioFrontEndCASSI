import Header from "./Header"
import Footer from "./Footer"

interface PageLayoutProps {
  children: React.ReactNode
  userName?: string
  className?: string
}

export default function PageLayout({ 
  children, 
  userName = "Lorem Ipsum", 
  className = "" 
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-[#ffffff] ${className}`}>
      <Header userName={userName} />
      
      {children}
      
      <Footer />
    </div>
  )
}
