import React from 'react';
import './checkout.page.styles.scss';
import { connect } from 'react-redux';
import {
	selectCartItems,
	selectCartTotalPrice,
} from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ cartItems, cartTotalPrice }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="checkout-block">
				<span className="product">product</span>
			</div>
			<div className="checkout-block">
				<span>description</span>
			</div>
			<div className="checkout-block">
				<span>quality</span>
			</div>
			<div className="checkout-block">
				<span>price</span>
			</div>
			<div className="checkout-block">
				<span>remove</span>
			</div>
		</div>
		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className="total">
			<span>total:${cartTotalPrice}</span>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
