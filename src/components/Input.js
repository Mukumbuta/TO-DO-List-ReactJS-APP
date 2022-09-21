import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });
  const { addTodo } = props;
  const handleInput = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };
  // eslint-disable-next-line consistent-return
  const handleSubmit = (e) => {
    const { title } = inputText;
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setInputText({
        title: '',
      });
    } else {
      return (
        <small>Please write item description</small>
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          id="input"
          className="input-text"
          placeholder="Add Your Todo..."
          value={inputText.title}
          name="title"
          onChange={handleInput}
        />
        <button type="button" className="input-submit">Submit</button>
      </form>
    </div>
  );
};

Input.propTypes = { addTodo: PropTypes.func.isRequired };
export default Input;
