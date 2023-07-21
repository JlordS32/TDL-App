import '../styles/app.modules.css';

// React
import { createContext, useEffect, useState } from 'react';

// Routers
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Header from './header/Header';
import Home from './home/Home';
import PageNotFound from './pagenotfound/PageNotFound';

// Context
export const ModalContext = createContext();

const App = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedTodo, setSelectedTodo] = useState([]);

	// Toggle modal functions
	const close = () => setModalOpen(false);
	const open = () => {
		setModalOpen(true);
	};

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
