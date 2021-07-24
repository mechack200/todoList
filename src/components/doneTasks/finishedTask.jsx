import React from 'react';
import styled from 'styled-components';
import { MdDelete, MdEdit } from 'react-icons/md';
import { EditingIcons, ListContainer, List, Todo, Task } from '../List/list';

const FinishedTask = ({ finishedTask, deleteTask, handleDoneTask }) => {
	return finishedTask.length ? (
		<ListContainer>
			<h2>finished task</h2>
			{finishedTask.map((listItem, i) => (
				<List key={i}>
					<Todo>
						<Task>{listItem.name}</Task>
						<EditingIcons>
							<MdEdit style={{ color: '#a7a706' }} />
							<MdDelete
								onClick={() => deleteTask(listItem.id)}
								style={{ color: '#c44f4f' }}
							/>
						</EditingIcons>
					</Todo>
				</List>
			))}
		</ListContainer>
	) : (
		<h6>no done task yet</h6>
	);
};
export default FinishedTask;
