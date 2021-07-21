import React, { Component } from 'react';
import TodoInput from './components/TodoInput/todoInput';
import './App.css';
import TodoList from './components/TodoList/todoList';
import DeleteButtons from './components/DeleteButtons/delete';
import { v4 as uuidV4 } from 'uuid';
// import PropTypes from 'prop-types';
export default class App extends Component {
	state = { done: false, todoList: [], task: '' };

	handleInputChange = (event) => {
		this.setState({ task: event.target.value });
		console.log(this.state.task);
	};

	handleAddTask = (e) => {
		this.setState((prevState) => ({
			todoList: [
				...prevState.todoList,
				{
					name: this.state.task,
					done: this.state.done,
					id: uuidV4(),
				},
			],
		}));
		console.log(this.state.todoList);
	};
	// change undone task proper to done true or false
	toggleDone = () => {
		this.setState((prevState) => ({ done: !prevState.done }));
		console.log(this.state.done);
	};

	//selectDoneTask()
	DisplayDoneTasks = (id) => {
		const doneTask = this.state.todoList.fiiter(
			(task, i) => task.done === true
		);
		console.log(doneTask);
	};

	componentDidMount() {
		this.handleAddTask();
		this.toggleDone();
		// console.log(this.state.todoList);
	}
	render() {
		const { task, todoList, done } = this.state;
		return (
			<div className="App">
				<TodoInput
					task={task}
					handleInputChange={this.handleInputChange}
					handleAddTask={this.handleAddTask}
				/>
				<TodoList
					todoList={todoList}
					done={done}
					toggleDone={this.toggleDone}
				/>
			</div>
		);
	}
}
