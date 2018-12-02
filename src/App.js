import React, { Component } from 'react';
import './App.css';
import TodoList from './todoList/todoList';
import TodoListHook from './todoList/todoListHook';
import Hello from './hello/hello';
import HelloHook from './hello/helloHook';
import HelloWindow from './hello/helloWindow';
import HelloWindowHook from './hello/helloWindowHook';

class App extends Component {
  render() {
    return (
      <HelloWindowHook/>
    );
  }
}

export default App;
