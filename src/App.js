import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';
import axios from 'axios';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About.jsx'

import Header from './components/layout/Header.jsx';
import TodosList from './components/TodosList';
import AddTodo from './components/layout/AddTodo.jsx';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }), });
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] }))
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <TodosList todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )} />
          
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
