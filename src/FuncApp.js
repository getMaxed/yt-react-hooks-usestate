import React, { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const handleAddTodo = todo => setTodoList([...todoList, todo]);
  const handleDeleteTodo = todoToDelete => {
    const updatedTodoList = todoList.filter((_, todo) => todo !== todoToDelete);
    setTodoList(updatedTodoList);
  };

  return (
    <>
      <TodoForm addTodo={handleAddTodo} />
      {todoList.length !== 0 && (
        <>
          <h2>Todo List</h2>
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

/*
|--------------------------------------------------------------------------
| TODO FORM
|--------------------------------------------------------------------------
*/

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const handleFormSubmit = e => {
    e.preventDefault();

    if (!inputValue) return alert('write something');
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
        <input type="submit" value="Add Todo" />
      </form>
    </>
  );
};

/*
|--------------------------------------------------------------------------
| TODO
|--------------------------------------------------------------------------
*/

const Todo = ({ todo, deleteTodo, index }) => (
  <li onClick={() => deleteTodo(index)}>{todo}</li>
);

export default App;
