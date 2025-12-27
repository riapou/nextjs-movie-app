'use client'
import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/components/Navbar.module.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const NAV_ITEMS = [
    { href: '/', label: 'Home' },
    { href: '/movies', label: 'Movies' },
    { href: '/series', label: 'Series' },
    { href: '/trends', label: 'Trends' },
    { href: '/kids', label: 'Kids' },
  ] as const

  // close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // close menu on ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keyup', handleEsc)
    return () => window.removeEventListener('keyup', handleEsc)
  }, [])

  // close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div>
      {isOpen ? (
        <div ref={menuRef} className={styles.MobileMenu}>
          <ul className={styles.menuLinks}>
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href} className={pathname === href ? styles.active : ''}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsOpen(false)}
            className={styles.closeMenuBTN}
            type='button'
            title='close menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      ) : (
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(true)}
          className={styles.openMenuBTN}
          type='button'
          title='open menu'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
      )}
    </div>
  )
}

export default MobileMenu
