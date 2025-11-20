"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const [todos, setTodos] = useState<{ text: string, completed: boolean }[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const add = () => {
    setTodos([{ text: todo, completed: false }, ...todos]);
    setTodo("");
  }

  const enterKey = (e) => {
    if(e.key === 'Enter')
    {
      add()
    }
  }

  const deleteToDo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
    // "_" this is used to skip the first parameter and move to next, as in we don't care what's written in the todo but we want to check its index.
  }

  const editToDo = (index: number) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  }

  const saveToDo = () => {
    if(editIndex === null) return;
    if (!editText.trim()) return;

    const updated = [...todos];
    updated[editIndex].text = editText;
    setTodos(updated);

    setEditIndex(null);
    setEditText("");
  }

  const cancelEdit = () => {
    setEditIndex(null);
    setEditText("");
  }

  const handleEditKey = (e) => {
    if(e.key === 'Enter')
    {
      saveToDo();
    }

    if(e.key === 'Escape')
    {
      cancelEdit();
    }
  }

  const clearAll = () => {
    setTodos([]);
  }

  const toggleBtn = (index: number) => {
    const updated = [...todos]
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            To Do App
          </h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex gap-3">
            <input 
              type='text'
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Add a todo..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
              onKeyDown={enterKey}
            />
            
            <button
              onClick={() => add()}
              disabled={!todo.trim() || editIndex !== null}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg cursor-pointer hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add
            </button>

            <button
              onClick={clearAll}
              disabled={editIndex !== null || todos.length === 0}
              className="px-6 py-3 bg-red-600 text-white font-semibold cursor-pointer rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Delete All
            </button>
          </div>
        </div>

        {todos.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 px-2">
              Your Tasks ({todos.length})
            </h2>
            <ul className="space-y-3">
              {
                todos.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-gray-100 p-4 flex items-center justify-between group hover:shadow-lg transition-all duration-200 hover:border-blue-200"
                  >
                    {editIndex === index ? (
                      <div className="flex-1 flex items-center gap-3">
                        <input 
                          type='text'
                          value={editText}
                          onKeyDown={handleEditKey}
                          onChange={(e) => setEditText(e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                          onClick={saveToDo}
                          disabled={!editText.trim()}
                          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-green-600 transform hover:scale-105 transition-all"
                        >
                          Save
                        </button>

                        <button
                          onClick={cancelEdit}
                          className="px-4 py-2 bg-gray-400 text-white font-semibold rounded-lg cursor-pointer hover:bg-gray-500 transform hover:scale-105 transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <>
                      <input
                          type="checkbox"
                          checked={value.completed}
                          onChange={() => toggleBtn(index)}
                          disabled={editIndex !== null}
                          className="w-6 h-6 accent-blue-600 cursor-pointer"
                        />

                      <li className={`flex-1 text-lg px-2 break-words ${
                            value.completed
                              ? "line-through opacity-60"
                              : ""
                          }`}
                        >
                        {value.text}
                      </li>
                      <button 
                        onClick={() => deleteToDo(index)}
                        disabled={editIndex !== null}
                        className="ml-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-red-600 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Delete
                      </button>
  
                      <button
                        onClick={() => editToDo(index)}
                        disabled={editIndex !== null}
                        className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Edit
                        </button>
                        </>
                    )}

                  </div>

                ))
              }
            </ul>
          </div>
        )}

        {todos.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
            <div className="text-gray-400 mb-4">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No tasks yet. Add one above to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
