import React from 'react';
import styled from 'styled-components';
// import { MdDelete, MdEdit, MdSave } from 'react-icons/md';
import { FaBook } from 'react-icons/fa';

export const customMediaQuery = (minWidth) =>
	`@media (min-width: ${minWidth}px)`;

export const media = {
	custom: customMediaQuery,
	desktop: customMediaQuery(1200),
	tablet: customMediaQuery(768),
	phone: customMediaQuery(375),
};

const Wrapper = styled.div`
	height: auto;

	${media.desktop} {
		width: 70%;
	}
	${media.tablet} {
		width: 90%;
	}
	${media.phone} {
		width: 100%;
	}
`;
export const Title = styled.h2`
	text-align: centre;
	font-size: 1.5rem;
	color: black;
	padding: 0.2rem 0;
	text-transform: uppercase;
`;
const InputAddButton = styled.form`
	display: flex;
	flex-direction: column;
	width: 90%;
	height: 20%;
	padding: 1rem;
	margin: 0 auto;
	border: 1px solid grey;
`;

const SaveInput = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-size: 1.2rem;
	border-radius: 1rem;
	margin: 1rem 0;
	width: 100%;
`;
export const Button = styled.button`
	background-color: #377997f8;
	border: 0.5rem;
	padding: 0.5rem;
	font-size: 1rem;
	color: #e4dede;
	border-radius: 0.5rem;
`;

const SaveIcon = styled.div`
	background-color: #377997f8;
	align-items: center;
	padding: 0.5rem;
	color: white;
	border-bottom-left-radius: 0.5rem;
	border-top-left-radius: 0.5rem;
`;
const Input = styled.input`
	flex-grow: 6;
	padding: 0.5rem;
	font-size: 1rem;
	border-bottom-right-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
`;

const TodoInput = ({ inputValue, handleInputChange, handleAddTask }) => {
	return (
		<Wrapper>
			<Title>Todo input</Title>
			<InputAddButton>
				<SaveInput>
					<SaveIcon>
						<FaBook />
					</SaveIcon>
					<Input
						name="inputValue"
						value={inputValue}
						onChange={handleInputChange}
						type="text"
						placeholder="New Todo"
					/>
				</SaveInput>
				<Button disabled={!inputValue} onClick={handleAddTask}>
					Add new task
				</Button>
			</InputAddButton>
		</Wrapper>
	);
};
export default TodoInput;
