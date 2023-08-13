import '../styles/app.modules.css';
// React
import { createContext, useEffect, useState } from 'react';

// Routers
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Header from './header/Header';
import Home from './home/Home';
import PageNotFound from './pagenotfound/PageNotFound';
import { useDispatch } from 'react-redux';
import { updateGroupLabels } from './store/TodoReducer';

// Context
export const ModalContext = createContext();

const App = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedTodo, setSelectedTodo] = useState([]);

	const dispatch = useDispatch();

	// Toggle modal functions
	const close = () => setModalOpen(false);
	const open = () => {
		setModalOpen(true);
	};

	// For re-rendering localised group names
	useEffect(() => {
		const savedGroups = localStorage.getItem('groups'); // Get localStorage

		dispatch(updateGroupLabels(savedGroups ? JSON.parse(savedGroups) : []));
	}, []);

	return (
		<BrowserRouter>
			<ModalContext.Provider
				value={{
					open,
					close,
					modalOpen,
					setSelectedTodo,
					selectedTodo,
				}}
			>
				<div className='app'>
					<Header />
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/note/*'
							element={<Home />}
						/>
						<Route
							path='/*'
							element={<PageNotFound />}
						/>
					</Routes>
				</div>
			</ModalContext.Provider>
		</BrowserRouter>
	);
};

export default App;
