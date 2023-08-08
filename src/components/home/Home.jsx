import { useContext, useRef } from 'react';
import { ModalContext } from '../App';
import GroupsModal from '../navigation/navItems/groups/GroupsModal';

// Components
import Todo from './Todo';
import Nav from '../navigation/Nav';
import Search from './Search';
import TodoModal from '../dialog/TodaModal';
import '../../styles/todo.modules.css';

const Home = () => {
	const { selectedTodo, close, modalOpen } = useContext(ModalContext);

	const dialogRef = useRef();

	return (
		<>
			<div className='home-container'>
				<Nav dialogRef={dialogRef}/>
				<Search />
				<Todo dialogRef={dialogRef}/>
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
			<GroupsModal dialogRef={dialogRef}/>
		</>
	);
};

export default Home;
