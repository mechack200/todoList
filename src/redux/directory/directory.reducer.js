const INITIAL_STATE = {
	sections: [
		{
			title: 'HATS',
			id: 1,
			imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',

			linkUrl: 'hats',
		},
		{
			title: 'JACKET',
			id: 2,
			imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
			linkUrl: 'jacket',
		},
		{
			title: 'Sneakers',
			id: 3,
			imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
			linkUrl: '',
		},
		{
			title: 'Men',
			id: 4,
			size: 'large',
			imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
			linkUrl: '',
		},
		{
			title: 'women',
			id: 5,
			size: 'large',
			imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
			linkUrl: '',
		},
	],
};
const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
