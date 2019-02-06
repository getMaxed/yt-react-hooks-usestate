import React, { useState } from 'react';

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const handleAddTodo = todo => setTodoList([...todoList, todo]);
    const handleDeleteTodo = todoToDelete => {
        const updatedTodoList = todoList.filter(
            (_, todo) => todo !== todoToDelete
        );
        setTodoList(updatedTodoList);
    };

    return (
        <>
            <TodoForm addTodo={handleAddTodo} />
            {todoList.length !== 0 && (
                <>
                    <h2>TodoList</h2>
                    <ul>
                        {todoList.map((todo, index) => (
                            <Todo
                                key={Math.random()}
                                todo={todo}
                                index={index}
                                deleteTodo={handleDeleteTodo}
                            />
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

const TodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const onFormSubmit = e => {
        e.preventDefault();
        if (!inputValue) return alert('write something');

        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <input type="submit" value="Add Todo" />
        </form>
    );
};

const Todo = ({ todo, index, deleteTodo }) => (
    <li onClick={() => deleteTodo(index)}>{todo}</li>
);

export default App;
