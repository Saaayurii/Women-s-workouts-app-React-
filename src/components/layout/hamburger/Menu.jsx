import styles from './Hamburger.module.scss'
import cn from 'clsx'
import { menu } from './menu.data'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Cookies from 'js-cookie'
import { TOKEN } from '../../../app.constants'

// eslint-disable-next-line react/prop-types
const Menu = ({ isShow, setIsShow }) => {
	const {setIsAuth} = useAuth()
	const navigate = useNavigate()

	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)
		navigate('/auth')
	}
	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
					
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
