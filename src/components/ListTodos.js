import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItems';

const ListTodos = (props) => {
  const { todoList, updateTitle, handleStatus, handleDeletion} = props;
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} 
            updateTitle={updateTitle}
            todo={todo} handleStatus={handleStatus} 
            handleDeletion={handleDeletion} />
        ))}
      </ul>
    </div>
  );
}


ListTodos.propTypes = {
  todoList: PropTypes.array.isRequired,
};
export default ListTodos;
