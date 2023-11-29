import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'
import Statistics from '../profile/statistics/Statistics'

function Home() {
	const navigate = useNavigate()
	const bgimg = '/images/bg.jpg'
	return (
		<>
			<Layout bgImage={bgimg}>
				<h1 className={styles.heading}>JUST DO IT</h1>
				<Button clickHandler={() => navigate('/new-workout')}>New</Button>
				<Statistics/>
			</Layout>
		</>
	)
}

export default Home
