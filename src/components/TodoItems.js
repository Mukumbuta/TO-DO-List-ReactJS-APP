import React, { Component } from 'react'
import Checkbox from './Checkbox';
import DeleteBtn from './DeleteBtn';

// eslint-disable-next-line  react/prefer-stateless-function
class TodoItems extends Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  exitEditMode = (event) => {
    const enterKey = event.key
    if (event.key === 'Enter') {
      this.setState({ editing: false })
    }
  }

  render() {
    const { todo, updateTitle, handleStatus, handleDeletion } =  this.props;
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    let viewmode = {}
    let editmode = {}

    if (this.state.editing) {
      viewmode.display = "none"
    } else {
      editmode.display = "none"
    }
    return (
      <div>
        <li className="item">
          <div onClick={this.handleEditing} style={viewmode}>
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
            onKeyDown={this.exitEditMode} />
        </li>
      </div>
    )
  }
}

export default TodoItems;
