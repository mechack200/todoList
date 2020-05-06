import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.component.styles.scss';
import {
	removeItemFromCart,
	decreaseItemQuatity,
	addItemToCart,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({
	cartItem,
	removeItem,
	decreaseItemQuatity,
	increaseItemQuantity,
}) => {
	const { imageUrl, price, quatity, name } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="cartItemImage" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => decreaseItemQuatity(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quatity}</span>{' '}
				<div className="arrow" onClick={() => increaseItemQuantity(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => removeItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeItem: (item) => dispatch(removeItemFromCart(item)),
	decreaseItemQuatity: (item) => dispatch(decreaseItemQuatity(item)),
	increaseItemQuantity: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
