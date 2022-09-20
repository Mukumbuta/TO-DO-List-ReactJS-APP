import React from 'react';

class Checkbox extends React.Component {

  render() {
    const { todo, handleStatus } = this.props;
    
    return (
      <div>
        <input type="checkbox" 
          className="checkbox"
          id={todo.id} checked={todo.completed} 
        onChange={() => handleStatus(todo.id)} />
      </div>
    )
  }
 
}

export default Checkbox
