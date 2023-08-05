import { useContext } from 'react';
import { ModalContext } from '../App';

// Components
import Todo from './Todo';
import Nav from '../navigation/Nav';
import Search from './Search';
import Modal from '../dialog/Modal';
import '../../styles/todo.modules.css';

const Home = () => {
	const { selectedTodo, close, modalOpen } = useContext(ModalContext);

	return (
		<>
			<div className='home-container'>
				<Nav />
				<Search />
				<Todo />
			</div>
			{modalOpen && (
				<div>
					<Modal
						modalOpen={modalOpen}
						handleClose={close}
						selectedTodo={selectedTodo}
					/>
				</div>
			)}
		</>
	);
};

export default Home;
