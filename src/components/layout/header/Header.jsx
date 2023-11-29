import styles from './Header.module.scss'
import AiOutlineLeft from '../../../../public/images/AiOutlineLeft.svg?url'
import CgProfile from '../../../../public/images/CgProfile.svg'
import Hamburger from '../hamburger/Hamburger'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

// eslint-disable-next-line react/prop-types
const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button
						aria-label='Go to porfile'
							onClick={() => {
								navigate('/profile')
							}}
						>
							<img src={CgProfile} alt='Profile Icon' />
						</button>
					) : (
						<button
						aria-label='Go back'
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<img src={AiOutlineLeft} alt='Left Icon' />
						</button>
					)}
					<h1 className={styles.header}>WORKOUT APP</h1>
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
