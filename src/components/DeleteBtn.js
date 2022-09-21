import React from 'react';
import PropTypes from 'prop-types';

const DeleteBtn = (props) => {
  const { todo, handleDeletion } = props;
  return (
    <div>
      <button type="button" onClick={() => handleDeletion(todo.id)}>Delete</button>
    </div>
  );
};

// eslint-disable-next-line react/forbid-prop-types
DeleteBtn.propTypes = { todo: PropTypes.object.isRequired };
DeleteBtn.propTypes = { handleDeletion: PropTypes.func.isRequired };

export default DeleteBtn;
