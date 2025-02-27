import React from "react";

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No tasks available. Add a new task to get started!</p>;
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        
        <thead className="bg-blue-600 text-white uppercase text-sm leading-normal sticky top-0 z-10">

          <tr>

            <th className="py-13 px-6 text-left">Task ID</th>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-center">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>

          </tr>

        </thead>

        
        <tbody className="text-gray-700 text-sm font-light">

          {tasks.map((task, index) => (

            <tr key={task.id} className={`border-b border-gray-200 hover:bg-gray-100 transition duration-300 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
              <td className="py-3 px-6">{task.id}</td>
              <td className="py-3 px-6 font-medium">{task.title}</td>
              <td className="py-3 px-6">{task.description}</td>

             
              <td className="py-3 px-6 text-center">
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    task.status === "COMPLETED"
                      ? "bg-green-100 text-green-700"
                      : task.status === "IN PROGRESS"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {task.status}
                </span>
              </td>

              <td className="py-3 px-6 text-center flex justify-center space-x-3">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition duration-200 shadow-md"
                  onClick={() => onEdit(task)}
                >
                  ✏ Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-200 shadow-md"
                  onClick={() => onDelete(task.id)}
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
