import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItems';

const ListTodos = (props) => {
  const {
    todoList, updateTitle, handleStatus, handleDeletion,
  } = props;
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            updateTitle={updateTitle}
            todo={todo}
            handleStatus={handleStatus}
            handleDeletion={handleDeletion}
          />
        ))}
      </ul>
    </div>
  );
};

ListTodos.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todoList: PropTypes.array.isRequired,
  updateTitle: PropTypes.func.isRequired,
  handleStatus: PropTypes.func.isRequired,
  handleDeletion: PropTypes.func.isRequired,
};

export default ListTodos;
