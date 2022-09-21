import React, { useState, useEffect } from 'react'
import Checkbox from './Checkbox';
import DeleteBtn from './DeleteBtn';

const  TodoItems = (props) => {
  const [editStatus, setEditStatus] = useState(false)

  const handleEditing = () => {
    setEditStatus(false)
  }

  const exitEditMode = (event) => {
    const enterKey = event.key
    if (event.key === 'Enter') {
      setEditStatus(false)
    }
  }

  const { todo, updateTitle, handleStatus, handleDeletion } = props;
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  let viewmode = {}
  let editmode = {}

  if (editStatus) {
    viewmode.display = "none"
  } else {
    editmode.display = "none"
  }

  useEffect(() => {
    return () => {
      console.log('Cleaning up...')
    }
  }, [])
  return (
    <div>
      <li className="item">
        <div onClick={handleEditing} style={viewmode}>
          <Checkbox todo={todo} handleStatus={handleStatus} />
          <DeleteBtn todo={todo} handleDeletion={handleDeletion} />
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
        </div>
        <input type="text" 
          className="textInput" 
          style={editmode} 
          value={todo.title}
          onChange={(e) => {
            const todoID = todo.id;
            const editedValue = e.target.value;
            updateTitle(editedValue, todoID);
          }} 
          onKeyDown={exitEditMode} />
      </li>
    </div>
  )
}


export default TodoItems;
