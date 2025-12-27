import { memo } from 'react'
import { Poppins } from 'next/font/google'
import styles from '../Navbar.module.scss'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

function Logo() {
  return (
    <Link href='/' className={`${styles.logo} ${poppins.className}`}>
      <span>PN</span> Movies
    </Link>
  )
}

export default memo(Logo)
