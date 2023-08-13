import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredTodo } from '../store/TodoReducer';
import SearchIcon from '../../assets/icons/SearchIcon';

const Search = () => {
	const todoRedux = useSelector((state) => state.todoReducer.value);
	const dispatch = useDispatch();

	const [searchQuery, setSearchQuery] = useState('');

	const handleSubmit = (e) => {
		if (e.key === 'Enter') {
			setSearchQuery(e.target.value);
		}
	};

	const filteredTodo = todoRedux.filter((todo) => {
		if (!todo.content && !todo.title) return false;

		const filteredContent = todo.content
			.toLowerCase()
			.includes(searchQuery.toLowerCase());

		const filteredTitle = todo.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());

		return filteredContent || filteredTitle;
	});

	const updatedFilteredTodo = filteredTodo.map((todo) => {
		return {
			...todo,
			searchQuery: searchQuery,
		};
	});

	useEffect(() => {
		dispatch(updateFilteredTodo(updatedFilteredTodo));
	}, [updatedFilteredTodo, dispatch]);

	return (
		<div className='search-container'>
			<div className='input-icons'>
				<SearchIcon
					color='#F0E8F0'
					width='17'
				/>
			</div>
			<input
				type='text'
				name='search-bar'
				className='search-bar'
				placeholder='Search'
				onKeyDown={handleSubmit}
			/>
		</div>
	);
};

export default Search;
