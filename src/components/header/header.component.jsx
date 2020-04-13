import React from 'react';
import './header.component.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util.js';
const Header = ({ currentUser }) => {
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
				{currentUser ? (
					<div
						className="option"
						onClick={() => {
							auth.signOut();
						}}
					>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};
export default Header;
