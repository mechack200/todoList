import React from 'react';
import './header.component.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
	return (
		<div className="header">
			<Link className="logo-container">
				<Logo className="logo" to="/" />
			</Link>
			<div className="options">
				<Link className="option" to="/">
					SHOP
				</Link>
				<Link className="option" to="/">
					CONTACT
				</Link>
			</div>
		</div>
	);
};
export default Header;
