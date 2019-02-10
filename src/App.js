import React, { Component } from 'react';

class App extends Component {
  state = {
    todoList: []
  };

  handleAddTodo = todo => {
    this.setState(prevState => {
      return {
        todoList: [...prevState.todoList, todo]
      };
    });
  };

  handleDeleteTodo = todoToDelete => {
    this.setState(prevState => {
      const updatedTodoList = prevState.todoList.filter(
        (_, todo) => todo !== todoToDelete
      );
      return {
        todoList: updatedTodoList
      };
    });
  };

  render() {
    return (
      <>
        <TodoForm addTodo={this.handleAddTodo} />
        {this.state.todoList.length !== 0 && (
          <>
            <h2>Todo List</h2>
            <ul>
              {this.state.todoList.map((todo, index) => (
                <Todo
                  todo={todo}
                  index={index}
                  key={Math.random()}
                  deleteTodo={this.handleDeleteTodo}
                />
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}

/*
|--------------------------------------------------------------------------
| TODO FORM
|--------------------------------------------------------------------------
*/

class TodoForm extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (!this.state.inputValue) return alert('write something !');
    this.props.addTodo(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.inputValue}
        />
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
}

/*
|--------------------------------------------------------------------------
| TODO
|--------------------------------------------------------------------------
*/

const Todo = ({ todo, index, deleteTodo }) => (
  <li onClick={() => deleteTodo(index)}>{todo}</li>
);

export default App;
