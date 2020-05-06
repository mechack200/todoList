import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.component.styles.scss';
import CartItem from '../cart-item/cart-item.component.jsx';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((item) => <CartItem key={item.id} item={item} />)
			) : (
				<span className="empty-message">Your cart is empty </span>
			)}
		</div>
		<CustomButton
			onClick={() => {
				history.push('/checkout');
				dispatch(toggleCartHidden());
			}}
		>
			GOTO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

// const mapDispatchToProps = (dispatch) => ({
//  cartHidden: state =>
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
