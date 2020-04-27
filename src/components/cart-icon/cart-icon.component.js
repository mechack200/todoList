import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import './cart-icon.component.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingCart className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);
const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
