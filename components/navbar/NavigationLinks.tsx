'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo } from 'react'
import styles from '@/styles/components/Navbar.module.scss'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/movies', label: 'Movies' },
  { href: '/series', label: 'Series' },
  { href: '/trends', label: 'Trends' },
  { href: '/kids', label: 'Kids' },
] as const

function NavigationLinks() {
  const pathname = usePathname()

  return (
    <ul className={styles.links}>
      {NAV_ITEMS.map(({ href, label }) => (
        <li key={href} className={pathname === href ? styles.active : ''}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default memo(NavigationLinks)