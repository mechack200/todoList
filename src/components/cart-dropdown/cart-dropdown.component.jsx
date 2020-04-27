import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { selectCartItems } from '../../redux/cart/cart.selector';
import './cart-dropdown.component.styles.scss';
import CartItem from '../cart-item/cart-item.component.jsx';

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.map((item) => (
				<CartItem key={item.id} item={item} />
			))}
		</div>
		<CustomButton>GOTO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
