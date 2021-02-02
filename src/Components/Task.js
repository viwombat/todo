import React from "react"

let Task = ({task, ...props}) => {
    let classes = []

    if (task.done) {
        classes.push('done')
    }

    console.log('todo', task)

    return (
        <li> 
            <span className={classes.join(' ')}>
                {console.log(classes)}
                <input 
                    type="checkbox" 
                    //checked={task.done}
                    onChange={() => {
                        return props.onToggle()
                    }}
                />
                &nbsp; 
                {task.title}
                &nbsp;   
                <button className="btn">&times;</button>
            </span>
        </li>
    )
}

export default Task 