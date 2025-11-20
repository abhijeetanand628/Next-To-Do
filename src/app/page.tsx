"use client"
import { useState } from "react";

export default function Home() {

  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");

  const add = () => {
    setTodos([todo, ...todos]);
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
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!todo.trim()}
            >
              Add
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
                    <li className="flex-1 text-gray-800 font-medium text-lg px-2 break-words">
                      {value}
                    </li>
                    <button 
                      onClick={() => deleteToDo(index)}
                      className="ml-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-red-600 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Delete
                    </button>

                    <button
                      // onClick={() => editToDo(index)}
                      className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Edit
                      </button>
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
