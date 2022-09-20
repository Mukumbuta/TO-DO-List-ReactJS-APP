import React, { Component } from 'react'

export class Input extends Component {
  state = {
    title: ""
  };
  
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const todoTitle = this.state.title;
    e.preventDefault();
    this.props.addTodo(todoTitle);
    this.setState({
      title: ""
    });
  };
  
  render() {
    // const { handleSubmission } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input 
              type="text" id="input" 
              placeholder="Add Your Todo..." 
              value={this.state.title} 
              name="title"
              onChange={this.handleInput} />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Input
