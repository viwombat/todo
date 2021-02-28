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
	const [edit, setEdit] = useState(true)

	const handleEditInput = useCallback((event) => {
		setInputValue(event.target.value)
	}, [setInputValue])

	const textAreaFocus = React.createRef()

	const focusText = () => {
		textAreaFocus.current.focus();
	}

	const handleClick = () => {
		setEdit(!edit);
	}

	return (
		<div className='task'>
			<div className='leftSide'>
				<input
					className='checkbox'
					type='checkbox'
					checked={task.done}
					onChange={onToggle} 
				/>

				{(edit) 
				?	<div   
						id='titleDiv' 
						className={task.done ? 'done' : ''}  
						readOnly={readOnlyInput} 
						onChange={handleEditInput}
						ref={textAreaFocus}
					>{inputValue}</div>
						
				:	<textarea   
						id='titleArea' 
						className={task.done ? 'done' : ''} 
						value={inputValue} 
						readOnly={readOnlyInput} 
						onChange={handleEditInput} 
						ref={textAreaFocus}
						
					></textarea>
				}
			</div>

			<div className='controls'>
				<div className='arrows'>
					<button className='arrowBtn' onClick={onUp}>
						<i className='arrow up'></i>
					</button>
					<button className='arrowBtn' onClick={onDown}>
						<i className='arrow down'></i>
					</button>
				</div>

				<button className='editBtn' onClick={() => {
					setReadOnlyInput(!readOnlyInput)
					focusText()
					handleClick()
				}}>{edit ? 'edit' : 'save'}</button>
				
				<button className='deleteBtn' onClick={onDelete}>&times;</button>
			</div>
		</div>
	)
}

export default Task 
