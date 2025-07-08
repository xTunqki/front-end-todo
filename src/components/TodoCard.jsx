export default function TodoCard({ todo, onEdit, onDelete, onCheck }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <p className={`text-lg font-semibold ${todo.status === 'completed' ? 'line-through text-gray-400' : ''}`}>
        {todo.title}
      </p>
      <p className="text-sm text-gray-600 mb-2">{todo.description}</p>
      <div className="flex gap-2">
        <button onClick={onEdit} className="bg-pink-200 text-black px-3 py-1 rounded">Edit</button>
        <button onClick={onDelete} className="bg-orange-200 text-black px-3 py-1 rounded">Delete</button>
        <button onClick={onCheck} className="bg-gray-200 text-black px-3 py-1 rounded">
          {todo.status === "todo" && "Start"}
          {todo.status === "in-progress" && "Finish"}
          {todo.status === "completed" && "Reset"}
        </button>
      </div>
    </div>
  );
}