import React from 'react';
import styled from 'styled-components';
import { Button, Title } from '../TodoInput/todoInput';
import { v4 as uuidV4 } from 'uuid';
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

const Delete_btns = [
	{ id: uuidV4(), name: 'Delete done tasks', f: 'done' },
	{ id: uuidV4(), name: 'delete all tasks', f: 'all' },
];

const DeleteButtons = ({ todoList, deleteAllTasks, deleteDoneTask }) => {
	const btnId = (id) => {
		const l = Delete_btns.find((btn) => btn.id === id);
		if (l) {
			if (l.f === 'all') {
				deleteAllTasks();
			} else if (l.f === 'done') {
				deleteDoneTask();
			}
		}
	};

	return (
		<DelButtons>
			{Delete_btns.map((btn, i) => (
				<DelButton onClick={() => btnId(btn.id)} key={i}>
					{btn.name}
				</DelButton>
			))}
		</DelButtons>
	);
};

export default DeleteButtons;
