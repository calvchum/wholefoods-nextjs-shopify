import Link from 'next/link'
import css from '../styles/style.scss'

const Header = () => (
  <div className={css.headerStyle}>
    <Link href="/">
      <a className={css.linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a className={css.linkStyle}>About</a>
    </Link>
    <h1>Organic Wholefoods</h1>
  </div>
)

export default Header