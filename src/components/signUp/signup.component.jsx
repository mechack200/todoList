import React, { Component } from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import FormInput from '../FormInput/formInput.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import './signup.component.styles.scss';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, password, confirmPassword, email } = this.state;
		if (password !== confirmPassword) {
			alert("password is doesn't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.error(error);
		}
	};
	render() {
		return (
			<div className="sign-up">
				<h2 className="title">I don't have an account</h2>
				<span>Register with ur email and password</span>
				<form className="sign-up" onSubmit={this.handleSubmit}>
					<FormInput
						name="displayName"
						value={this.state.displayName} 
						type="text"
						onChange={this.handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						name="email"
						value={this.state.email}
						type="text"
						onChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						name="password"
						value={this.state.password}
						type="password"
						onChange={this.handleChange}
						label="password"
						required
					/>
					<FormInput
						name="confirmPassword"
						value={this.state.confirmPassword}
						type="password"
						onChange={this.handleChange}
						label="confirm password"
						required
					/>
					<CustomButton type="submit">Register</CustomButton>
				</form>
			</div>
		);
	}
}
export default SignUp;
