import { memo } from 'react'
import styles from '@/styles/components/Navbar.module.scss'

function Logo() {
  return (
    <div className={styles.logo}>
      <span>PN</span> Movies
    </div>
  )
}

export default memo(Logo)
