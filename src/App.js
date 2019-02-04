import React, { Component } from 'react';

const Todo = props => {
    const { todo, index } = props;
    return (
        <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            {todo.text}
        </div>
    );
};

class TodoForm extends Component {
    state = {
        inputValue: ''
    };

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.inputValue) alert('Write something');

        this.props.addTodo(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Add Todo" />
            </form>
        );
    }
}

class App extends Component {
    state = {
        todoList: [
            {
                text: 'asdf23',
                isCompleted: false
            },
            {
                text: '5435f',
                isCompleted: false
            },
            {
                text: 'ooooooooi',
                isCompleted: false
            }
        ],
        newTodo: ''
    };

    handleAddTodo = text => {
        this.setState(prevState => {
            return {
                todoList: [...prevState.todoList, { text }]
            };
        });
    };

    render() {
        return (
            <>
                <TodoForm addTodo={this.handleAddTodo} />
                <h2>Todos</h2>
                {this.state.todoList.map((todo, index) => (
                    <Todo key={index} todo={todo} />

                    // <li key={todo} completeTodo={this.handleCompleteTodo}>
                    //     {todo}
                    // </li>
                ))}

                <br />
                <button onClick={this.handleResetTodos}>Reset</button>
            </>
        );
    }
}

export default App;
