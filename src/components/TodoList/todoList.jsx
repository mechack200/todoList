import React from 'react';
import styled from 'styled-components';
import { Button, Title } from '../TodoInput/todoInput';
import Lists from '../List/list';
import { v4 as uuidV4 } from 'uuid';
import DeleteButtons from '../DeleteButtons/delete';
import FinishedTask from '../doneTasks/finishedTask';
// import DoneList from '../doneTask/doneTask';

export const Categories = styled.div`
	display: flex;
	flex-direction: row;
	height: auto;
	width: 90%;
	margin: 0 auto;
	justify-content: space-between;
`;
export const ListCategory = styled(Button)`
	list-style: none;
	width: 30%;
`;
const AllDoneTodo = styled.div`
	margin: 0 auto;
	width: 95%;
	margin-top: 2rem;
	/* border: 1px solid indigo; */
	padding: 2rem 0;
`;
const title = styled.h3`
	border: 1px solid white;
	text-align: center;
	font-size: 1.5rem;
`;
const categories = [
	{ name: 'all', id: uuidV4(), title: ' all task' },
	{ name: 'done', id: uuidV4(), title: 'done task' },
	{ name: 'todo', id: uuidV4(), title: 'todo task' },
];

const TodoList = ({
	checked,
	todoList,
	deleteTask,
	handleDoneTask,
	deleteAllTasks,
	deleteDoneTask,
	displayDoneTask,
	displayTodoTask,
	displayAllTasks,
	finishedTask,
	handleChecked,
}) => {
	const btnId = (id) => {
		const l = categories.find((btn) => btn.id === id);
		if (l) {
			if (l.name === 'all') {
				return displayAllTasks();
			} else if (l.name === 'done') {
				displayDoneTask();
			} else if (l.name === 'todo') {
				displayTodoTask();
			}
		}
	};

	return (
		<AllDoneTodo>
			<Title>Todo list</Title>
			<Categories>
				{categories.map((listCategory, i) => (
					<ListCategory onClick={() => btnId(listCategory.id)} key={i}>
						{listCategory.name}
					</ListCategory>
				))}
			</Categories>
			{todoList.length ? (
				<div>
					<Lists
						checked={checked}
						todoList={todoList}
						handleDoneTask={handleDoneTask}
						deleteTask={deleteTask}
						handleChecked={handleChecked}
					/>
					<FinishedTask finishedTask={finishedTask} />
				</div>
			) : (
				<h2>no task added yet</h2>
			)}
			<DeleteButtons
				deleteAllTasks={deleteAllTasks}
				deleteDoneTask={deleteDoneTask}
				todoList={todoList}
			/>
		</AllDoneTodo>
	);
};
export default TodoList;
