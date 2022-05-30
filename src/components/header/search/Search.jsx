import React from 'react'
import searchIcon from '../../../assets/header/search.svg'
import styles from './Search.module.scss'

const Search = () => {
	return (
		<div className={styles.inputWrapper}>
			<input
				className={styles.input}
				type='text'
				placeholder='Ищите среди 10 000 товаров...'
			/>
			<img className={styles.searchIcon} src={searchIcon} alt='search' />
		</div>
	)
}

export default Search
