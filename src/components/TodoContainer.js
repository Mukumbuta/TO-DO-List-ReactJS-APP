import React from 'react';
import Header from './Header';
import InputTodo from './Input';
import TodoList from './ListTodos';

// eslint-disable-next-line  react/prefer-stateless-function
class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = ({
      todoList: [
        {
          id: 1,
          title: 'Setup dev-env',
          completed: true,
        },
        {
          id: 2,
          title: 'Develope website',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
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
      id: 4,
      title: todoTitle,
      completed: false
    };
    
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };
  
  render() {
    const { todoList } = this.state;
    return (
      <div>
        <Header />
        <InputTodo addTodo={this.addTodo} />
        <TodoList 
          todoList={todoList} 
          handleStatus={this.handleTodoStatus} 
          handleDeletion={this.handleDeletion} />
      </div>
    );
  }
}
    
export default TodoContainer;
