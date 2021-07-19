import React, { Component } from 'react';
import TodoInput from './components/TodoInput/todoInput';
// import PropTypes from 'prop-types';
export default class App extends Component {
	state = { isOpen: false };
	componentDidMount() {
		console.log(this.state.isOpen);
	}
	render() {
		return (
			<>
		<TodoInput/>
			</>
		);
	}
}
