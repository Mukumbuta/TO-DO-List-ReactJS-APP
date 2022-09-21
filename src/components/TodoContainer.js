import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './Input';
import TodoList from './ListTodos';

const getlocalTodos = () => {
  const localStorageList = JSON.parse(localStorage.getItem('todoList'));
  return localStorageList || [];
};

const TodoContainer = () => {
  const [todoList, setTodoList] = useState(getlocalTodos());

  const handleTodoStatus = (id) => {
    setTodoList((prevState) => {
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  const handleDeletion = (id) => {
    const todoID = id;
    setTodoList([
      ...todoList.filter((todo) => todo.id !== todoID),
    ]);
  };

  const addTodo = (todoTitle) => {
    const newTodo = {
      id: uuidv4(),
      title: todoTitle,
      completed: false,
    };
    setTodoList([
      ...todoList, newTodo,
    ]);
  };

  const updateTitle = (newTitle, id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = newTitle;
        }
        return todo;
      }),
    );
  };

  useEffect(() => {
    const storeTodo = JSON.stringify(todoList);
    localStorage.setItem('todoList', storeTodo);
  }, [todoList]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          handleStatus={handleTodoStatus}
          updateTitle={updateTitle}
          handleDeletion={handleDeletion}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
