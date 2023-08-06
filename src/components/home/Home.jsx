import { useContext } from 'react';
import { ModalContext } from '../App';

// Components
import Todo from './Todo';
import Nav from '../navigation/Nav';
import Search from './Search';
import TodoModal from '../dialog/TodaModal';
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
					<TodoModal
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
