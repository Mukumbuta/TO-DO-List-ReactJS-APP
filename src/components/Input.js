import React, { Component, useState } from 'react'

const Input = (props) => {
  const [ inputText, setInputText ] = useState({
    title: "",
  })
  
  const handleInput = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodo(inputText.title);
      setInputText({
        title: "",
      })
    } else {
      alert('Please write item description')
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
          <input 
            type="text" id="input" 
            className="input-text"
            placeholder="Add Your Todo..." 
            value={inputText.title} 
            name="title"
            onChange={handleInput} />
          <button className="input-submit">Submit</button>
      </form>
    </div>
  )
}


export default Input
