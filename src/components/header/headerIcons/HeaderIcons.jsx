import React from 'react'
import userIcon from '../../../assets/header/user.svg'
import scalesIcon from '../../../assets/header/idk.svg'
import favoriteIcon from '../../../assets/header/favorites.svg'
import cart from '../../../assets/header/cart.svg'
import { useSelector } from 'react-redux'
import styles from './HeaderIcons.module.scss'

const HeaderIcons = ({ setVisible }) => {
	const { cartItems, cartValue } = useSelector(state => state)
	return (
		<div className={styles.headerIcons}>
			<div className={styles.itemIcons}>
				<img className={styles.userIcon} src={userIcon} alt='userIcon' />
			</div>
			<div className={styles.itemIcons}>
				<img className={styles.scalesIcon} src={scalesIcon} alt='scales' />
			</div>
			<div className={styles.itemIcons}>
				<img
					className={styles.favoriteIcon}
					src={favoriteIcon}
					alt='favoriteIcon'
				/>
				<div className={styles.Value}>
					<p>1</p>
				</div>
			</div>
			<div onClick={() => setVisible(true)} className={styles.itemIcons}>
				<img className={styles.cartIcon} src={cart} alt='cartIcon' />
				{cartItems.length > 0 && (
					<div className={styles.Value}>
						<p>{cartItems.length}</p>
					</div>
				)}
			</div>
			<div className={styles.cartText}>
				<p className={styles.cartTitle}>Корзина</p>
				<p className={styles.cartValue}>{cartValue} ₸</p>
			</div>
		</div>
	)
}

export default HeaderIcons
