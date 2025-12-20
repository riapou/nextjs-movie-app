import { memo } from 'react'
import styles from '@/styles/components/Navbar.module.scss'
import Logo from './Logo'
import NavigationLinks from './NavigationLinks'
import NavButtons from './NavButtons'
import MobileMenu from './MobileMenu'

function Navbar() {
  return (
    <nav className={styles.navbar} role='navigation'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <MobileMenu />
          <Logo />
        </div>
        <NavigationLinks />
        <NavButtons />
      </div>
    </nav>
  )
}

export default memo(Navbar)
