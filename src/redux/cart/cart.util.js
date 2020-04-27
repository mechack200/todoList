export const addItemToCart = (cartItems, cartItemToADD) => {
	const existingItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToADD.id
	);
	if (existingItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToADD.id
				? { ...cartItem, quatity: cartItem.quatity + 1 }
				: { cartItem }
		);
	}
	return [...cartItems, { ...cartItemToADD, quatity: 1 }];
};
