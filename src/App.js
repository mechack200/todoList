import React, { Component } from 'react';
import TodoInput from './components/TodoInput/todoInput';
import './App.css';
import TodoList from './components/TodoList/todoList';
import { v4 as uuidV4 } from 'uuid';
import FinishedTask from './components/doneTasks/finishedTask';

export default class App extends Component {
	state = { todoList: [], imputValue: '', finishedTask: [], checked: false };

	handleInputChange = (event) => {
		this.setState({ inputValue: event.target.value });
	};

	handleChecked = () => {
		this.setState((prevState) => ({
			checked: !prevState.checked,
		}));
		console.log(this.state.checked);
	};

	handleAddTask = (e) => {
		if (this.state.inputValue !== '') {
			let newTask = {
				name: this.state.inputValue,
				done: false,
				id: uuidV4(),
				time: new Date(),
			};
			this.setState((prevState) => {
				return {
					todoList: prevState.todoList.concat(newTask),
				};
			});
			this.setState({ inputValue: '' });
		}
		console.log(this.state.todoList);
		e.preventDefault();
	};

	handleDoneTask = (id) => {
		const { todoList } = this.state;
		const new_array = todoList.map((element) =>
			element.id === id ? { ...element, done: 'true' } : element
		);
		this.setState({ todoList: new_array });
		console.log(todoList);
	};

	deleteAllTasks = () => {
		this.setState({ todoList: [] });
		console.log(this.state.todoList);
	};
	deleteDoneTask = () => {
		const { todoList } = this.state;
		const new_array = todoList;
		const doneTask = new_array.filter((task) => task.done === false);
		return this.setState({ todoList: doneTask });
	};
	displayTodoTask = () => {
		const { todoList, finishedTask } = this.state;
		const new_array = todoList;
		const doneList = new_array.filter((task) => task.done === false);

		return this.setState({ todoList: doneList });
	};
	displayAllTasks = () => {
		const { todoList, finishedTask } = this.state;
		const new_array = todoList;
		const todoTask = new_array.filter((task) => task.done === false);
		const tempDoneTask = new_array.filter((task) => task.done !== false);
		this.setState({ finishedTask: tempDoneTask });
		const allTask = [...tempDoneTask, ...todoTask];
		this.setState({ todoList: allTask });
		console.log(this.state.todoList);
	};
	displayDoneTask = () => {
		const { todoList } = this.state;
		const new_array = todoList;
		const doneList = new_array.filter((task) => task.done !== false);
		if (doneList.length < 1) {
			console.log('no done task added yet');
			return 'no done task yet';
		}
		return this.setState({ todoList: doneList });
	};

	deleteTask = (id) => {
		const { todoList } = this.state;
		const new_array = todoList;
		//   get task id
		const findTask = new_array.find((item) => item.id === id);
		if (findTask) {
			const new_list = new_array.filter((task) => task.id !== id);
			this.setState({ todoList: new_list });
		}
	};

	componentDidMount() {}
	render() {
		const { inputValue, todoList, finishedTask, checked } = this.state;
		return (
			<div className="App">
				<TodoInput
					inputValue={inputValue}
					handleInputChange={this.handleInputChange}
					handleAddTask={this.handleAddTask}
				/>
				<TodoList
					todoList={todoList}
					finishedTask={finishedTask}
					checked={checked}
					handleDoneTask={this.handleDoneTask}
					deleteTask={this.deleteTask}
					deleteAllTasks={this.deleteAllTasks}
					deleteDoneTask={this.deleteDoneTask}
					displayDoneTask={this.displayDoneTask}
					displayAllTasks={this.displayAllTasks}
					displayTodoTask={this.displayTodoTask}
					handleChecked={this.handleChecked}
				/>
			</div>
		);
	}
}
