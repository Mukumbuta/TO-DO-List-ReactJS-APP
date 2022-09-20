import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItems';

// eslint-disable-next-line  react/prefer-stateless-function
class ListTodos extends Component {
  render() {
    const { todoList, handleStatus, handleDeletion} = this.props;
    return (
      <div>
        <ul>
          {todoList.map((todo) => (
            <TodoItem key={todo.id} 
            todo={todo} handleStatus={handleStatus} handleDeletion={handleDeletion} />
          ))}
        </ul>
      </div>
    );
  }
}

ListTodos.propTypes = {
  todoList: PropTypes.array.isRequired,
};
export default ListTodos;
