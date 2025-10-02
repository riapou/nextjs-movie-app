import styles from '@/styles/components/Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}><span>PN</span> Movies</div>

        {/* Links */}
        <ul className={styles.links}>
          <li>Home</li>
          <li>Movies</li>
          <li>Series</li>
          <li>Trends</li>
          <li>Kids</li>
        </ul>

        {/* Buttons */}
        <div className={styles.buttons}>
          <Link href={'/search'} className={styles.searchBtn}>
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
                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
              />
            </svg>
          </Link>
          <button className={styles.loginBtn}>Login / Signup</button>
        </div>
      </div>
    </nav>
  )
}
