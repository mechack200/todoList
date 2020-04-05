import React, { Component } from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/preview-collections/collections-preview.component';

export default class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA
		};
	}

	narcissisticNumber(value) {
		// A narcissistic number is number in which the sum of it own digit
		// raised tot the length of the git is equals to the the initial number
		// example: 153= 1*3 + 5*3 + 3*3 = 153
		// 1634 => 1*4 + 6*4 + 3*4 + 4*4 = 1634
		let result = [];
		let power = value.toString().length;
		let allDigit = [];
		let digits = value.toString();
		power = parseInt(power);
		for (let i = 0; i < digits.length; i++) {
			allDigit.push(parseInt(digits[i]));
		}
		for (let i = 0; i < allDigit.length; i++) {
			result.push(Math.pow(allDigit[i], power));
		}
		let sum = result.reduce(add, 0);
		function add(a, b) {
			return a + b;
		}
		sum === value
			? console.log(` ${value} is narcisistic number`)
			: console.log(` ${value} is not narcisistic number`);
		// for (let j = 0; j < result; j++) {
		// 	sum += result[j];
		// }
		// console.log(sum);
	}

	componentWillMount() {
		console.log(this.state.collections);
		console.log(this.state.collections[2]);
	}

	render() {
		const { collections } = this.state;
		return (
			<div>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}
