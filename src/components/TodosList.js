import { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
import './TodosList.css';

class TodosList extends Component {
  
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodosList;