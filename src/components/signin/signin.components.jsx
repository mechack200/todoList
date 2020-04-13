import React, { Component } from 'react';
import FormInput from '../FormInput/formInput.component';
import './signin.components.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.util.js';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (err) {
			console.error(err);
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2 className="title">already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						label="Email"
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
