import React from 'react';
import styled from 'styled-components';
import { MdDelete, MdEdit } from 'react-icons/md';
import { ImCheckboxChecked } from 'react-icons/im';
import { media, customMediaQuery } from '../TodoInput/todoInput';
import { EditingIcons, ListContainer, List, Todo, Task } from '../List/list.js';

const AllTasks = ({ todoList, deleteTask, handleDoneTask }) => {
	return (
		<ListContainer>
			<h2>done tasks</h2>
			{todoList.map((listItem, i) => (
				<List key={i}>
					<Todo>
						<Task>{listItem.name}</Task>
						<EditingIcons>
							<ImCheckboxChecked
								onClick={() => handleDoneTask(listItem.id)}
								style={{ color: '#5c5f5c' }}
							/>
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
	);
};

{
}

export default AllTasks;
