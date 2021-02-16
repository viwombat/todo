import React, { useState, useCallback } from "react"
import './styles.css'

function Task({
	task,
	onDown,
	onUp,
	onDelete,
	onToggle
}) {

	const [inputValue, setInputValue] = useState(task.title)
	const [readOnlyInput, setReadOnlyInput] = useState(true)

	const handleEditInput = useCallback((event) => {
		setInputValue(event.target.value)
	}, [setInputValue])

	const textAreaFocus = React.createRef()

	const focusText = () => {
		textAreaFocus.current.focus();
	}

	return (
		<span className="task">
			<input
				className='checkbox'
				type="checkbox"
				checked={task.done}
				onChange={onToggle} 
			/>

			<textarea   
				id="title" 
				className={task.done ? 'done' : ''} 
				value={inputValue} readOnly={readOnlyInput} 
				onChange={handleEditInput} 
				ref={textAreaFocus}
			></textarea>
			
			<div className="arrows">
				<button className="arrowBtn" onClick={onUp}><i className="arrow up"></i></button>
				<button className="arrowBtn" onClick={onDown}><i className="arrow down"></i></button>
			</div>
			<button className="editBtn" onClick={() => {
				setReadOnlyInput(!readOnlyInput)
				focusText()
			}} >edit</button>
			<button className="deleteBtn" onClick={onDelete}>&times;</button>
		</span>

	)
}

export default Task 
