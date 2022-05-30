import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { links } from './navigate'
import styles from './SideBar.module.scss'

const SideBar = () => {
	const [isActive, setIsActive] = useState(0)
	return (
		<div className={styles.sidebar}>
			{links.map((link, i) => (
				<div
					onClick={() => setIsActive(i)}
					key={link.name}
					className={styles.linkItem}
				>
					<div className={`${styles.linkItemWrapper} ${styles.hoverLinks}`}>
						<img className={styles.linkImg} src={link.img} alt='Icon' />
						<p className={styles.linkText}>{link.name}</p>
					</div>
					<div className={styles.arrowWrapper}>
						<IoIosArrowForward
							className={
								isActive === i
									? `${styles.arrow} ${styles.active}`
									: styles.arrow
							}
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export default SideBar
