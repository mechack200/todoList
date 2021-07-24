import React from 'react';
import styled from 'styled-components';
import { MdDelete, MdEdit } from 'react-icons/md';
import { ImCheckboxChecked } from 'react-icons/im';

export const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: 0 auto;
`;

export const List = styled.div`
	margin: 2rem 0;
	width: 100%;
	font-size: 1rem;
	margin: 0 auto;
	margin-top: 2rem;
	/* border: 1px solid indigo; */
`;
export const Todo = styled.div`
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
	font-size: 1rem;
	border: 1px solid grey;
	padding: 0.5rem 0;
	padding-left: 1rem;
`;
export const Task = styled.div`
	color: grey;
	flex-grow: 4;
	text-align: left;
	color: black;
	justify-content: center;
	align-content: center;
	padding-top: 1rem;
`;

export const EditingIcons = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0.5rem 0;
	justify-content: space-around;
	flex-grow: 1;
	font-size: 1.5rem;
	color: #7b9d7b;
	/* border: 1px solid grey; */
`;

const CheckButton = styled(ImCheckboxChecked)`
	/* color: green; */
	color: ${(props) => (props.checked ? 'green' : '#5c5f5c')};
`;

const Lists = ({
	todoList,
	deleteTask,
	handleDoneTask,
	handleChecked,
	checked,
}) => {
	// const displayAllTask =
	return (
		<ListContainer>
			<h2>all lists</h2>
			{todoList.map((listItem, i) => (
				<List key={i}>
					<Todo>
						<Task>{listItem.name}</Task>
						<EditingIcons>
							<CheckButton
								onClick={() => {
									handleDoneTask(listItem.id);
									handleChecked();
								}}
								changeColor={true}
								// style={{ color: '#5c5f5c' }}
							/>

							<MdEdit
							// style={{ color: '#a7a706' }}
							/>
							<MdDelete
								onClick={() => deleteTask(listItem.id)}
								// style={{ color: '#c44f4f' }}
							/>
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
