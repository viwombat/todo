import React from 'react'
import './App.css'
import Task from './Components/Task'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {id: 0, title: 'Create new task', done: false},
        {id: 1, title: 'Read a book', done: true},
        {id: 2, title: 'Play with a cat', done: false},
      ]
    }

  }

  toggleTodo = (id) => {
    console.log(id)
    this.state.tasks.map(todo => {
      if (todo.id === id) {
        this.setState(() => {todo.done = !todo.done})
      }
      return todo
    })
  }

  render(){
    const { tasks } = this.state;

    return(
      <div className="body">
        <div className="header">
          <h1>Todo List</h1>
          {/* <div>Active tasks: {(tasks) => {return (tasks.reduce((previousValue, item) => {
            if (item.done === true){
              previousValue + 1;
            }
          }, 0))}}
          </div> */}
        </div> 

        <div className="wrapper">
          {tasks.map(task => 
            <Task task={task} key={task.id} onToggle={() => this.toggleTodo(task.id)}></Task>
          )}
        </div>
      </div>
    )
  }
}

export default App;
