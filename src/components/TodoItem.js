import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './TodoItem.css';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
    <div style={this.getStyle()} className="todo-item">
        <div className="todo-item__content">
          <input type="checkbox" id="todo-chkbox" onChange={this.props.markComplete.bind(this, id)}/>
          <div className="text">{ title }</div>
          <div className="close-btn" onClick={this.props.delTodo.bind(this, id)}><i className="gg-close-r"></i></div>
        </div>
    </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem
