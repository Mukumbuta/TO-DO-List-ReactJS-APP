import React, { Component } from 'react'
import Checkbox from './Checkbox';
import DeleteBtn from './DeleteBtn';

// eslint-disable-next-line  react/prefer-stateless-function
class TodoItems extends Component {
  render() {
    const { todo, handleStatus, handleDeletion } =  this.props;

    return (
      <div>
        <li>
          <Checkbox todo={todo} handleStatus={handleStatus} /> {todo.title} <DeleteBtn todo={todo} handleDeletion={handleDeletion} />
        </li>
      </div>
    )
  }
}

export default TodoItems;
