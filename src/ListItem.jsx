export const ListItem = ({ completed, title, id, toggleTodo, deleteTodo, updateTodo }) => {
  
return (
  <li className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 transition rounded-lg">
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-400"
      />
      <span
        className={completed ? "line-through text-gray-500" : "text-gray-800"}
      >
        {title}
      </span>
    </label>

    {/* Buttons grouped together */}
    <div className="flex gap-2">
      <button
        onClick={() => updateTodo(id)}
        className="text-purple-500 hover:text-purple-700 transition cursor-pointer"
      >
        ✏️
      </button>
      <button
        onClick={() => deleteTodo(id)}
        className="text-purple-500 hover:text-purple-700 transition cursor-pointer"
      >
        🗑️
      </button>
    </div>
  </li>
);

};
