import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteJob, getTodos, markComplete, todosSelector } from '../../todosSlice';
import TodoForm from '../todoForm/TodoForm';

const Todos = () => {
    const todos = useSelector(todosSelector);
	console.log('todos: ',todos);
    const dispatch = useDispatch();

    useEffect(()=>{
		const params = {
            _page: 1,
            _limit: 10,
          };
        dispatch(getTodos(params));
    }, []);

    const handleCompleted = (id) => {
        dispatch(markComplete(id));
    }

    const handleDeleteJob = (id) => {
        dispatch(deleteJob(id));
    }

	return (
		<div className='todo-list'>
			<TodoForm />
			<div>Total Todos: {todos.length}</div>
			<ul>
				{todos.map(todo => (
					<li key={todo.id} className={todo.completed ? 'completed' : ''}>
						{todo.title}
						<input
							type='checkbox'
                            checked = {todo.completed}
                            onChange = {() => handleCompleted(todo.id)}
						/>
						<button onClick= {()=> handleDeleteJob(todo.id)} >
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Todos
