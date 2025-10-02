import { memo } from 'react'
import styles from '@/styles/components/Navbar.module.scss'
import Link from 'next/link'

function Logo() {
  return (
    <Link href={'/'} className={styles.logo}>
      <span>PN</span> Movies
    </Link>
  )
}

export default memo(Logo)
