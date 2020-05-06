import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumulatedQuatity, cartItem) => accumulatedQuatity + cartItem.quatity,
			0
		)
);

export const selectCartTotalPrice = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumulatedQuatity, cartItem) =>
				accumulatedQuatity + cartItem.quatity * cartItem.price,
			0
		)
);
