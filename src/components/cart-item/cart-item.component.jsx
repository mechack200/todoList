import React from 'react';
import './cart-item.component.styles.scss';

const CartItem = ({ item: { price, imageUrl, name, quatity } }) => (
	<div className="cart-item">
		<img src={imageUrl} alt="itemImage" />
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="price">
				{quatity} X ${price}
			</span>
		</div>
	</div>
);

export default CartItem;
