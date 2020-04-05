import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-iitem/menu-item.component.jsx';

export default class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sessions: [
				{
					title: 'HATS',
					id: 1,
					imageUrl: 'https://i.ibb.co/ojqHpnp/sneakers.png',
					linkUrl: 'hats'
				},
				{
					title: 'JACKET',
					id: 2,
					imageUrl: '/src/images/img1.jpg',
					linkUrl: 'jacket'
				},
				{ title: 'Sneakers', id: 3, imageUrl: '../images/img3', linkUrl: '' },
				{
					title: 'Men',
					id: 4,
					size: 'large',
					imageUrl: '../images/img4',
					linkUrl: ''
				},
				{
					title: 'women',
					id: 5,
					size: 'large',
					imageUrl: '../images/img5',
					linkUrl: ''
				}
			]
		};
	}
	// otherSectionProps automatically includes other objects properties
	render() {
		return (
			<div className="directory-menu">
				{this.state.sessions.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}
