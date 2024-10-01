import React, { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleCompleteTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <h1 className="todo__heading">To Do List</h1>
      <div className="todo__input-wrapper">
        <input
          className="todo__input"
          type="text"
          placeholder="Add a new task + "
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="todo__add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="todo__list">
        {todos.map((todo, index) => (
          <li key={index} className="todo__list-item">
            <span className={`todo__text ${todo.completed ? "todo__text--completed" : ""}`}>
              {todo.text}
            </span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleteTodo(index)}
              className="todo__checkbox"
            />
            <button
              className="todo__delete-button"
              onClick={() => handleDeleteTodo(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
