"use client"
import { useState } from "react";

export default function Home() {

  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");

  const add = () => {
    setTodos([...todos, todo]);
    setTodo("");
  }

  const deleteToDo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
    // "_" this is used to skip the first parameter and move to next, as in we don't care what's written in the todo but we want to check its index.
  }

  return (
    <div>
      <h1>To Do app</h1>
      <input 
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      
      <button
        onClick={() => add()}
      >
        Add
      </button>

      {todos.length > 0 && (
        <ul>
          {
            todos.map((value, index) => (
              <div key={index}>
                  <li>{value}</li>
                  <button onClick={() => deleteToDo(index)}>Delete</button> 
              </div>
            ))
          }
        </ul>
      )}
    </div>
  );
}
