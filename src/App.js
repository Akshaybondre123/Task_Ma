import React, { useState, useEffect } from "react";
import { addTask, getTasks, getTaskById, updateTask, deleteTask } from "./api/TService";


import TaskForm from "./components/Tform";

import TaskList from "./components/TList";

export default function App() {

  const [tasks, setTasks] = useState([]);

  const [editingTask, setEditingTask] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchId, setSearchId] = useState(""); 
  const [searchResult, setSearchResult] = useState(null); 

  useEffect(() => {

    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    
    setLoading(true);
    try {


      const response = await getTasks();
      setTasks(response.data);
      setError(null);
    } 
    
    catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to load tasks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchById = async () => {
    if (!searchId) {
      setError("Please enter a Task ID.");
      return;
    }

    try {
      
      const response = await getTaskById(searchId);
      setSearchResult(response.data);
      setError(null);
    } 
    catch (err) {

      console.error("Error fetching task by ID:", err);
      setSearchResult(null);
      setError("Task not found. Please check the ID.");
    }
  };

  const handleAddOrUpdateTask = async (task) => {
    try {

      if (editingTask) {
        await updateTask(editingTask.id, task);
      } 
      else {
        await addTask(task);
      }
      setEditingTask(null);
      fetchTasks();
    } 
    catch (err) {
      console.error("Error saving task:", err);
      setError("Failed to save task. Please try again.");
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleDeleteTask = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      await deleteTask(id);
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
      setError("Failed to delete task. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Task Management System
      </h2>

      {error && <div className="text-red-600 text-center mb-3">{error}</div>}

    
      <TaskForm onSubmit={handleAddOrUpdateTask} editingTask={editingTask} />

      
      <div className="my-4 flex gap-2">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter Task ID"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <button
          onClick={handleSearchById}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Search
        </button>
      </div>

      
      {searchResult && (

        <div className="p-4 border rounded-md bg-gray-100 mb-4">
          <h3 className="font-bold text-lg mb-2">Task Found:</h3>
          <p><strong>ID:</strong> {searchResult.id}</p>
          <p><strong>Title:</strong> {searchResult.title}</p>
          <p><strong>Description:</strong> {searchResult.description}</p>
        </div>
      )}

      
      {loading ? (
        <p className="text-center text-gray-500">Loading tasks...</p>
      ) : (
        <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      )}
      
    </div>
  );
}
