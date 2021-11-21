import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'reactstrap';
import { addJob, todosSelector } from '../../todosSlice';
import './TodoForm.scss';

const TodoForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
	
	const todos = useSelector(todosSelector);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addJob(title))
        setTitle('');
    }

	return (
		<div>
			<form onSubmit={handleSubmit} >
				<input 
					className="add_todo" 
					type='text' value={title} 
					onChange={e => setTitle(e.target.value)} 
				/>
				<input className='' type='submit' value='Add' />
			</form>
		</div>
	)
}

export default TodoForm
