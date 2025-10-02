import { memo } from 'react'
import styles from '@/styles/components/Navbar.module.scss'
import Logo from './Logo'
import NavigationLinks from './NavigationLinks'
import NavButtons from './NavButtons'

function Navbar() {
  return (
    <nav className={styles.navbar} role='navigation'>
      <div className={styles.container}>
        <Logo />
        <NavigationLinks />
        <NavButtons />
      </div>
    </nav>
  )
}

export default memo(Navbar)
