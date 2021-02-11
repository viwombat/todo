import React from 'react'

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

export default showActiveTasks
