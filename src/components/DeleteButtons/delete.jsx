import React from 'react';
import styled from 'styled-components';
import { Button, Title } from '../TodoInput/todoInput';
// import { Categories, ListCategory } from '../TodoList/todoList';

const DelButtons = styled.div`
	display: flex;
	flex-direction: row;
	height: auto;
	width: 90%;
	justify-content: space-between;
	margin: 0 auto;
	margin-top: 2rem;
`;
const DelButton = styled(Button)`
	background-color: #e23838;
	width: 45%;
`;
// const AllTask = styled(Button)`
// 	background-color: #ca0b0b;
// `;

const Delete_btns = ['Delete done tasks', 'delete all taks'];

const DeleteButtons = () => {
	return (
		<DelButtons>
			{Delete_btns.map((btn_name, i) => (
				<DelButton key={i}>{btn_name}</DelButton>
			))}
			{/* <DoneTask> Delete Done Tasks</DoneTask>
			<AllTask>Delete all tasks</AllTask> */}
		</DelButtons>
	);
};

export default DeleteButtons;
