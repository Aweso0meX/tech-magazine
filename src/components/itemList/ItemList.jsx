import React from 'react'
import img from '../../assets/item/images/item1.jpg'
import hit from '../../assets/item/hit.svg'
import newOpt from '../../assets/item/new.svg'
import discOpt from '../../assets/item/discount.svg'
import presOpt from '../../assets/item/present.svg'
import present from '../../assets/item/presentIn.svg'
import cart from '../../assets/item/cart.svg'
import styles from './ItemList.module.scss'
import { items } from './items'

const ItemList = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Новинки</h2>
			<div className={styles.itemsWrapper}>
				{items.map(item => (
					<div key={item.id} className={styles.item}>
						<div className={styles.itemImageWrapper}>
							<img src={item.img} alt='img' />
						</div>
						<h5 className={styles.itemTitle}>{item.title}</h5>
						<div className={styles.itemValue}>
							<div className={styles.itemPrice}>
								{item.oldPrice && (
									<h3 className={styles.itemOldPrice}>{item.oldPrice} ₸</h3>
								)}
								<h3 className={styles.itemCurrentPrice}>
									{item.currentPrice} ₸
								</h3>
							</div>
							<div className={styles.itemCart}>
								<img src={cart} alt='cart' />
							</div>
						</div>

						<div className={styles.itemOption}>
							{item.options.hit && (
								<div className={styles.HitOption}>
									<img src={hit} alt='hit' />
									<p className={styles.HitText}>Хит продаж</p>
								</div>
							)}
							{item.options.new && (
								<div className={styles.newOption}>
									<img src={newOpt} alt='hit' />
									<p className={styles.HitText}>Новинка</p>
								</div>
							)}
							{item.options.discount && (
								<div className={styles.discOption}>
									<img src={discOpt} alt='hit' />
									<p className={styles.discText}>{item.options.discount}%</p>
								</div>
							)}
							{item.options.present && (
								<div className={styles.presOption}>
									<img src={presOpt} alt='hit' />
									<img className={styles.discText} src={present} alt='' />
								</div>
							)}
						</div>

						<div className={styles.colorOption}>
							{item.colors.map(color => (
								<div className={styles.colorWrapper}>
									<div
										style={{ background: color.backgroundImage }}
										className={styles.color}
									></div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ItemList
