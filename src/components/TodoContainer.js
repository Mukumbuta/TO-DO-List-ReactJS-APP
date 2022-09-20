import React from 'react';
import Header from './Header';
import InputTodo from './Input';
import TodoList from './ListTodos';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line  react/prefer-stateless-function
class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = ({
      todoList: [],
    });
  }

  handleTodoStatus = (id) => {
    const todoID = id;
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((todo) => {
        if (todo.id === todoID) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        
        return todo;
      }),
    }))
  };

  handleDeletion = (id) => {
    const todoID = id;
    this.setState({
      todoList: [
        // eslint-disable-next-line react/destructuring-assignment
        ...this.state.todoList.filter((todo) => {
          return todo.id !== todoID;
        })
      ]
    });
  };
  
  addTodo = (todoTitle) => {
    const newTodo = {
      id: uuidv4(),
      title: todoTitle,
      completed: false
    };

    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  updateTitle = (newTitle, id) => {
    this.setState({
      todoList: this.state.todoList.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle
        }
        return todo
      }),
    });
  }
  
  render() {
    const { todoList } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodo={this.addTodo} />
          <TodoList 
            todoList={todoList} 
            handleStatus={this.handleTodoStatus} 
            updateTitle={this.updateTitle}
            handleDeletion={this.handleDeletion} />
        </div>
      </div>
    );
  }
}
    
export default TodoContainer;
