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
                                    key={Math.random()}
                                    todo={todo}
                                    index={index}
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
| TODOFORM
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
        if (!this.state.inputValue) return alert('You gotta do something !');

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
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
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
