import React from 'react'
import logo from '../../assets/header/logo.svg'
import styles from './FooterBottom.module.scss'

const FooterBottom = () => {
	const today = new Date()
	return (
		<div className={styles.bottom}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<img src={logo} alt='logo' />
					<p>Политика конфиденциальности • Карта сайта </p>
					<p>Copyright © 2013 - {today.getFullYear()} ТОО Компания Эврика</p>
				</div>
			</div>
		</div>
	)
}

export default FooterBottom
