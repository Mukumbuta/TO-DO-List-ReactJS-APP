import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const { todo, handleStatus } = props;

  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id={todo.id}
        checked={todo.completed}
        onChange={() => handleStatus(todo.id)}
      />
    </div>
  );
};

// eslint-disable-next-line react/forbid-prop-types
Checkbox.propTypes = { todo: PropTypes.object.isRequired };
Checkbox.propTypes = { handleStatus: PropTypes.func.isRequired };

export default Checkbox;
