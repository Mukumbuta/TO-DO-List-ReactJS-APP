import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import DeleteBtn from './DeleteBtn';

const TodoItems = (props) => {
  const [editStatus, setEditStatus] = useState(false);

  const handleEditing = () => {
    setEditStatus(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setEditStatus(false);
    }
  };

  const exitEditMode = (event) => {
    if (event.key === 'Enter') {
      setEditStatus(false);
    }
  };

  const {
    todo, updateTitle, handleStatus, handleDeletion,
  } = props;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewmode = {};
  const editmode = {};

  if (editStatus) {
    viewmode.display = 'none';
  } else {
    editmode.display = 'none';
  }

  useEffect(() => () => 'Cleaning up...', []);

  return (
    <div>
      <li className="item">
        <div
          onClick={handleEditing}
          onKeyPress={handleKeyPress}
          role="button"
          tabIndex="0"
          style={viewmode}
        >
          <Checkbox todo={todo} handleStatus={handleStatus} />
          <DeleteBtn todo={todo} handleDeletion={handleDeletion} />
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
        </div>
        <input
          type="text"
          className="textInput"
          style={editmode}
          value={todo.title}
          onChange={(e) => {
            const todoID = todo.id;
            const editedValue = e.target.value;
            updateTitle(editedValue, todoID);
          }}
          onKeyDown={exitEditMode}
        />
      </li>
    </div>
  );
};

TodoItems.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
  updateTitle: PropTypes.func.isRequired,
  handleStatus: PropTypes.func.isRequired,
  handleDeletion: PropTypes.func.isRequired,
};

export default TodoItems;
