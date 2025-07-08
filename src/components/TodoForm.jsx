import { useEffect, useState } from 'react';

export default function TodoForm({ onSubmit, editData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setDescription(editData.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) return;

    const todo = {
      title,
      description
    };

    if (editData) {
      todo.id = editData.id;
    }

    onSubmit(todo);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-4">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded">
        {editData ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
