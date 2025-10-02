import { memo } from 'react'
import Link from 'next/link'
import styles from '@/styles/components/Navbar.module.scss'
import SearchIcon from './SearchIcon'

function NavButtons() {
  return (
    <div className={styles.buttons}>
      <Link href='/search' className={styles.searchBtn} aria-label='Search'>
        <SearchIcon />
      </Link>
      <Link href='/login' className={styles.loginBtn}>
        Login / Signup
      </Link>
    </div>
  )
}

export default memo(NavButtons)
