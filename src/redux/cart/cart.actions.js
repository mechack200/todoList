import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
});
export const removeItemFromCart = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item,
});

export const increaseItemQuatity = (item) => ({
	type: CartActionTypes.INCREASE_ITEM_QUATITY,
	payload: item,
});
export const decreaseItemQuatity = (item) => ({
	type: CartActionTypes.DECREASE_ITEM_QUATITY,
	payload: item,
});
