import React, { Component } from 'react';
import FormInput from '../FormInput/formInput.component';
import './signin.components.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.util.js';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2>already have an account</h2>
				<span>Sign in with your email and password</span>
				<form action="">
					<FormInput
						type="eamil"
						name="email"
						label="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="pasword"
						name="password"
						label="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<div className="button">
						<CustomButton type="submit">sign in</CustomButton>
						<CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
							sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
export default SignIn;
