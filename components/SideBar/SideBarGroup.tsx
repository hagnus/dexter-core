'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ArrowDown01Icon, ArrowUp01Icon } from 'hugeicons-react';
import { useState } from 'react';

type SideBarGroupProps = {
  children: React.ReactNode
  title: string
  icon?: JSX.Element
  onOpen?: () => {},
  onClose?: () => {},
}

export default function SideBarGroup({
  title,
  children,
  icon,
  onClose,
  onOpen
}: SideBarGroupProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    isOpen ? onClose && onClose() : onOpen && onOpen();
    setIsOpen(!isOpen);
  }

  return (
    <ul>
      <Disclosure>
        <li className='border border-primary-focus rounded-sm m-1'>
          <DisclosureButton className="flex items-center p-2 w-full primary-button" onClick={handleClick}>
            {icon}
            <span className="ms-3 w-full text-start">{title}</span>
            {
              isOpen
                ? <ArrowDown01Icon className="size-5 fill-secondary " />
                : <ArrowUp01Icon className="size-5 fill-secondary" />
            }
          </DisclosureButton>
          <DisclosurePanel className="p-1 text-secondary primary-focus">
            {
              children
            }
          </DisclosurePanel>
        </li>
      </Disclosure>
    </ul>
  )
}