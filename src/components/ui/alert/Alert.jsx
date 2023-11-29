import cn from 'clsx'
import styles from './Alert.module.scss'

// eslint-disable-next-line react/prop-types
const Alert = ({ type = 'success', text }) => {
	return <div className={cn(styles.alert, styles[type])}>{text}</div>
}

export default Alert
