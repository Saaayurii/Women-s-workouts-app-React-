import styles from './Hamburger.module.scss'
import IoCloseSharp from '../../../../public/images/IoCloseSharp.svg'
import GiHamburgerMenu from '../../../../public/images/GiHamburgerMenu.svg'
import Menu from './Menu'
import { useOutside } from '../../../hooks/useOutside'
const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)} aria-label='Open menu'>
				{isShow ? (
					<img src={IoCloseSharp} alt='Close Icon' />
				) : (
					<img src={GiHamburgerMenu} alt='Burger Icon' />
				)}
			</button>
			<Menu isShow={isShow}  setIsShow={setIsShow}/>
		</div>
	)
}

export default Hamburger
