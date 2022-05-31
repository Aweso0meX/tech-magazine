import React from 'react'
import logo from '../../assets/header/logo.svg'

import HeaderTop from './headerTop/HeaderTop'
import styles from './Header.module.scss'
import Search from './search/Search'
import HeaderIcons from './headerIcons/HeaderIcons'

const Header = ({ search, setSearch, setVisible }) => {
	return (
		<div className={styles.header}>
			<HeaderTop />
			<div className={styles.headerMainWrapper}>
				<div className={styles.container}>
					<div className={styles.headerMain}>
						<img className={styles.logo} src={logo} alt='logo' />
						<Search search={search} setSearch={setSearch} />
						<HeaderIcons setVisible={setVisible} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
