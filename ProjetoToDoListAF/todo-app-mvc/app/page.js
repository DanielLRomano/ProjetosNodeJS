'use client';


import { useState, useEffect } from 'react';


export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');


  useEffect(() => {
    fetchTodos();
  }, []);


  const fetchTodos = async () => {
    const response = await fetch('/api/todos');
    const data = await response.json();
    setTodos(data.data);
  };


  const addTodo = async () => {
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTodo }),
    });
    const data = await response.json();
    setTodos([...todos, data.data]);
    setNewTodo('');
  };


  const deleteTodo = async (id) => {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((todo) => todo._id !== id));
  };


  const updateTodo = async (id, newStatus) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: newStatus }),
    });
    const data = await response.json();
    setTodos(
      todos.map((todo) => (todo._id === id ? data.data : todo))
    );
  };


  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Adicionar Tarefa</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.title} - {todo.completed}
            <select
              value={todo.completed}
              onChange={(e) => updateTodo(todo._id, e.target.value)}
            >
              <option value="A Fazer">A Fazer</option>
              <option value="Fazendo">Fazendo</option>
              <option value="Concluído">Concluído</option>
            </select>
            <button onClick={() => deleteTodo(todo._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
   
