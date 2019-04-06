import Link from 'next/link'
import css from '../styles/style.scss'

const Footer = () => (
  <div className={css.footerStyle}>
    <p>This is a footer component</p>
    <Link href="/">
      <a className={css.linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a className={css.linkStyle}>About</a>
    </Link>
  </div>
)

export default Footer