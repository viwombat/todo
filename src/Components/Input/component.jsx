import React from 'react'
import './styles.css'

class Input extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			input: ''
		}
	}

  addTask = () => {
	  const { input } = this.state
		
	  if (input) {
			this.props.addTask(input)
			this.setState({input: ''})
		}
	}
	
	inputChange = event => {
		this.setState({ input: event.target.value })
	}

	render() {
		const { input } = this.state

		return (
			<div className='add-field'>
			<textarea placeholder='Enter new task...' value={input} onChange={this.inputChange}></textarea>
			<button type='submit' className='addBtn' onClick={this.addTask}>Add task</button>
		</div>
		)
	}
}

export default Input
