'use client'
import { ArrowLeft01Icon, ArrowRight01Icon, MoneyBag02Icon, PaintBoardIcon } from "hugeicons-react"
import { useState } from "react"

type SideBarProps = {
  children: React.ReactNode
}

export function SideBar({children}: SideBarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const width = isOpen ? 250 : 1;

  return (
    <>
      {
        <aside style={{width: width}} className="h-screen overflow-y-auto bg-primary p-1">
          {children}
        </aside>
      }
      <button 
        className="relative w-auto -left-3 secondary-button rounded-full self-center border border-primary"
        onClick={() => setIsOpen(!isOpen)} 
        aria-controls="default-sidebar">
        {isOpen ? <ArrowLeft01Icon size={20} /> : <ArrowRight01Icon size={20} />}
      </button>
    </>
  )
}
