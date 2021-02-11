import React from "react"
import './styles.css'

function Task({
	task,
	onDown,
	onUp,
	onDelete,
	onToggle
}) {

	return (
		<span className="task">
			<input
				className='checkbox'
				type="checkbox"
				checked={task.done}
				onChange={onToggle} 
			/>
			<span className={task.done ? 'done' : ''}>{task.title}</span>
			
			<div className="arrows">
				<button className="arrowBtn" onClick={onUp}><i className="arrow up"></i></button>
				<button className="arrowBtn" onClick={onDown}><i className="arrow down"></i></button>
			</div>
			<button className="deleteBtn" onClick={onDelete}>&times;</button>
		</span>

	)
}

export default Task 
