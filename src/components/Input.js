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
    if (this.state.title.trim()) {
      this.props.addTodo(todoTitle);
      this.setState({
        title: ""
      });
    } else {
      alert('Please write item description')
    }
  };

  render() {
    // const { handleSubmission } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-container">
            <input 
              type="text" id="input" 
              className="input-text"
              placeholder="Add Your Todo..." 
              value={this.state.title} 
              name="title"
              onChange={this.handleInput} />
            <button className="input-submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Input
