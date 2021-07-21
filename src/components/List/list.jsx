import React from 'react';
import styled from 'styled-components';
import { MdDelete, MdEdit } from 'react-icons/md';
import { ImCheckboxChecked } from 'react-icons/im';
import { media, customMediaQuery } from '../TodoInput/todoInput';

const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: 0 auto;
`;

const List = styled.div`
	margin: 2rem 0;
	width: 100%;
	font-size: 1rem;
	margin: 0 auto;
	margin-top: 2rem;
	/* border: 1px solid indigo; */
`;
const MdEditC = styled.h2`
	color: '#5c5f5c';
`;
const Todo = styled.div`
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
	font-size: 1rem;
	border: 1px solid grey;
	padding: 0.5rem 0;
	padding-left: 1rem;
`;
const Task = styled.div`
	color: grey;
	flex-grow: 4;
	text-align: left;
	color: black;
	justify-content: center;
	align-content: center;
	padding-top: 1rem;
`;

const EditingIcons = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0.5rem 0;
	justify-content: space-around;
	flex-grow: 1;
	font-size: 1.5rem;
	color: #7b9d7b;
	/* border: 1px solid grey; */
`;

const Lists = ({ todoList, done, toggleDone }) => {
	// const displayAllTask =
	return (
		<ListContainer>
			{todoList.map((listItem, i) => (
				<List>
					<Todo>
						<Task key={i}>{listItem.name}</Task>
						<EditingIcons>
							<ImCheckboxChecked
								onClick={toggleDone}
								/* style={{ color: '#5c5f5c' }} */
							/>
							<MdEdit style={{ color: '#a7a706' }} />
							<MdDelete style={{ color: '#c44f4f' }} />
						</EditingIcons>
					</Todo>
				</List>
			))}
		</ListContainer>
	);
};

{
}

export default Lists;
