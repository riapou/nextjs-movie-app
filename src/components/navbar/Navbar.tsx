import { memo } from 'react'
import styles from './Navbar.module.scss'
import Logo from './_internal/Logo'
import NavigationLinks from './_internal/NavigationLinks'
import NavButtons from './_internal/NavButtons'
import MobileMenu from './_internal/MobileMenu'

function Navbar() {
  return (
    <nav
      className={` ${styles.navbar}
      }`}
      role='navigation'
    >
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
