import React from 'react'
import Input from './Components/Input'
import Task from './Components/Task'
import Title from './Components/Title'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }
  }

  addNewTask = (task) => {
    const { tasks } = this.state
    const newTask = {
      id: Date.now(), 
      title: task, 
      done: false
    }
    const newData = [...tasks].concat(newTask)
    this.setState({tasks: newData}) 
  }
  
  showActiveTasks = () => {
    const { tasks } = this.state
    return (
      [...tasks].reduce((previousValue, item) => {
        return (
          !item.done ? previousValue + 1 : previousValue
        )
      }, 0)
    )
  }

  toggleTask = (id) => () => {
    const { tasks } = this.state

    const newTasks = [...tasks].map((task) => ({
      ...task,
      done:  task.id === id ? !task.done : task.done
    }))
    this.setState({ tasks: newTasks })
  }

  replaceUp = (index) => () => {
    if (index > 0) {
      this.setState((state) => {
        let { tasks } = state
        
        let data = [...tasks]
        let temp = data[index - 1]
        data[index - 1] = data[index]
        data[index] = temp
  
        return { tasks: data }
      })
    }
  }

  replaceDown = (index) => () => {
    if (index < this.state.tasks.length-1) {
      this.setState((state) => {
        let { tasks } = state;
        
        let data = [...tasks];
        let temp = data[index + 1];
        data[index + 1] = data[index];
        data[index] = temp;
  
        return { tasks: data }
      })
    }
  }

  deleteTask = (id) => () => {
    const { tasks } = this.state
    this.setState({
      tasks: [...tasks].filter(task => task.id !== id)
    })
  }

  render() {
    const { tasks } = this.state
    return(
      <div className="body">
        <div className="header">
          <Title />
          <Input addTask={this.addNewTask}/> 
          <div>
            Active tasks: {this.showActiveTasks()}
          </div>  
        </div> 

        <div className="wrapper">
          {tasks.map((task, index) => 
            <Task 
              task={task} 
              key={task.id}
              onUp={this.replaceUp(index)}
              onDown={this.replaceDown(index)}
              onToggle={this.toggleTask(task.id)}
              onDelete={this.deleteTask(task.id)}
            />
          )}
        </div>
      </div>
    )
  }
}

export default App
