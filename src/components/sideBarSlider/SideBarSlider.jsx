import React from 'react'
import SideBar from './sidebar/SideBar'
import styles from './sideBarSlider.module.scss'
import Slider from './slider/Slider'

const SideBarSlider = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<SideBar />
				<Slider />
			</div>
		</div>
	)
}

export default SideBarSlider
