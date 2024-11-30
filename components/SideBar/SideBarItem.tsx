import React from 'react'

type SideBarItemProps = {
  text: string
  icon?: JSX.Element
  href?: string
  onClick?: () => {},
}

export default function SideBarItem({ icon, text, href, onClick }: SideBarItemProps) {
  return (
    <ul>
      <li className='border border-primary-focus rounded m-1'>
        <a className="flex items-center p-2 w-full primary-button primary-focus" href={href} onClick={onClick}>
          {icon}
          <span className="ms-3 w-full text-start">{text}</span>
        </a>
      </li>
    </ul>
  )
}
