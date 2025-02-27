import React, { useState, useEffect } from "react";

export default function TaskForm({ onSubmit, editingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("PENDING");

  useEffect(() => {

    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title cannot be empty");
      return;
    }
    onSubmit({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("PENDING");
  };

  return (
    <div className="card">
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        {/* Task Title */}
        <div>
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

       
        <div>
          <label htmlFor="description">Task Description</label>

          <textarea
            id="description"
            placeholder="Enter task description"
            value={description}

            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        
        <div>
          <label htmlFor="status">Status</label>

          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >

            <option value="PENDING">Pending</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        
        <button type="submit">

          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}