import React, { Component } from 'react'

export class DeleteBtn extends Component {
  render() {
    const { todo, handleDeletion } = this.props
    return (
      <div>
        <button onClick={() => handleDeletion(todo.id)}>Delete</button>
      </div>
    )
  }
}

export default DeleteBtn

