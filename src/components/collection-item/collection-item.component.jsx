import React from 'react';
import './collection-item.component.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItemToCart }) => {
	const { imageUrl, price, name } = item;
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<div className="name">{name}</div>
				<div className="price">{price}</div>
			</div>
			<CustomButton inverted onClick={() => addItemToCart(item)}>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
