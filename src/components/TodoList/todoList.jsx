import React from 'react';
import styled from 'styled-components';
import { Button, Title } from '../TodoInput/todoInput';
import Lists from '../List/list';
import DeleteButtons from '../DeleteButtons/delete';

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
const categories = ['all', ' done', 'todo'];

const TodoList = ({ todoList, done, toggleDone }) => {
	return (
		<AllDoneTodo>
			<Title>Todo list</Title>
			<Categories>
				{categories.map((listCategory, i) => (
					<ListCategory key={i}>{listCategory}</ListCategory>
				))}
			</Categories>
			<Lists todoList={todoList} done={done} toggleDone={toggleDone} />

			<DeleteButtons />
		</AllDoneTodo>
	);
};
export default TodoList;
