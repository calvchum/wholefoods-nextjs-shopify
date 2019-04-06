import Header from './Header';
import Footer from './Footer';
import css from '../styles/style.scss'

const Layout = props => (
	<div className={css.layoutStyle}>
		<Header />
		{props.children}
    <Footer />
	</div>
)

export default Layout