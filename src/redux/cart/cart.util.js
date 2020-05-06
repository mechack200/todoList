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

export const increaseCartItem = (cartItems, itemToIncrease) => {
	const existingItem = cartItems.find(
		(cartItem) => cartItem.id === itemToIncrease.id
	);
	if (existingItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === itemToIncrease.id
				? { cartItem, quality: cartItem.quatity + 1 }
				: cartItem
		);
	}
};

export const decreaseItemQuatity = (cartItems, itemToRemove) => {
	const existingItem = cartItems.find(
		(cartItem) => cartItem.id === itemToRemove.id
	);
	if (existingItem.quatity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === itemToRemove.id
			? { ...cartItem, quatity: cartItem.quatity - 1 }
			: cartItem
	);
};
