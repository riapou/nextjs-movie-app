import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

interface FooterLink {
  text: string
  url: string
}

interface SocialMedia {
  platform: string
  icon: string
  url: string
}

interface FooterProps {
  companyName?: string
  currentYear?: number
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'PN Movie',
  currentYear = new Date().getFullYear(),
}) => {
  const footerSections: FooterLink[] = [
    { text: 'Terms of Service', url: '#' },
    { text: 'Privacy Policy', url: '#' },
    { text: 'Cookie Policy', url: '#' },
    { text: 'Content Policy', url: '#' },
    { text: 'Accessibility', url: '#' },
    { text: 'Contact Us', url: '#' },
  ]

  const socialMedia: SocialMedia[] = [
    { platform: 'Facebook', icon: '/social-media/facebook.svg', url: '#' },
    { platform: 'Twitter', icon: '/social-media/x.svg', url: '#' },
    { platform: 'Instagram', icon: '/social-media/instagram.svg', url: '#' },
    { platform: 'YouTube', icon: '/social-media/youtube.svg', url: '#' },
    { platform: 'TikTok', icon: '/social-media/tiktok.svg', url: '#' },
  ]

  const appStores = [
    { name: 'App Store', icon: '/stores/apple-app-store.svg', url: '#' },
    { name: 'Google Play', icon: '/stores/google-play.svg', url: '#' },
    { name: 'Microsoft Store', icon: '/stores/microsoft-store.svg', url: '#' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          {/* Company Logo */}
          <div className={styles.logo}>
            <h2 className={styles.logo__text}>{companyName}</h2>
          </div>
          {/* Newsletter & App Stores */}
          <div className={styles.footerContent}>
            {/* Newsletter */}
            <div className={styles.newsletter}>
              <h3 className={styles.newsletter__title}>Stay Updated</h3>
              <p className={styles.newslettert__text}>
                Subscribe to our newsletter for the latest movie news
              </p>
              <form className={styles.newsletter__form}>
                <input
                  type='email'
                  placeholder='Your email address'
                  className={styles.newsletter__input}
                />
                <button className={styles.newsletter__button} type='submit'>
                  Subscribe
                </button>
              </form>
            </div>

            {/* App Stores */}
            <div className={styles.appStores}>
              {appStores.map((store) => (
                <a
                  key={store.name}
                  href={store.url}
                  className={styles.appStores__link}
                  aria-label={`Download on ${store.name}`}
                >
                  <Image
                    className={styles.appStores__icon}
                    src={store.icon}
                    alt={store.name}
                    fill
                  />
                  <span>{store.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerMiddle}>
        <div className={styles.container}>
          <div className={styles.socialMedia}>
            <h4 className={styles.socialTitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              {socialMedia.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className={styles.socialLink}
                  aria-label={`Follow us on ${social.platform}`}
                >
                  <div className={styles.icon}>
                    <img src={social.icon} alt={social.platform} />
                  </div>
                  <span className={styles.socialPlatform}>
                    {social.platform}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>
                &copy; {currentYear} {companyName}. All rights reserved.
              </p>
              <p className={styles.disclaimer}>
                All movie titles, logos, and trademarks are the property of
                their respective owners.
              </p>
            </div>
            <div className={styles.ratings}>
              <div className={styles.ratingBadge}>
                <span className={styles.ratingIcon}>13+</span>
                <span>Age Rating</span>
              </div>
              <div className={styles.ratingBadge}>
                <span className={styles.ratingIcon}>HD</span>
                <span>Quality</span>
              </div>
              <div className={styles.ratingBadge}>
                <span className={styles.ratingIcon}>CC</span>
                <span>Subtitles</span>
              </div>
            </div>
          </div>

          <nav className={styles.bottomLinks} aria-label='Footer navigation'>
            <ul className={styles.sectionLinks}>
              {footerSections.map((link) => (
                <li key={link.text} className={styles.linkItem}>
                  <Link href={link.url} className={styles.link}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
