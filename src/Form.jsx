import { useState } from "react";
export const Form = (props) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newItem === "") return;
    props.onSubmit(newItem);
    setNewItem("");
  }
  return (
    <>
      <form
        className="p-4 rounded-lg shadow-sm flex flex-col gap-4 sm:flex-row sm:items-center"
        onSubmit={handleSubmit}
      >
        <input
          id="item"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a Task"
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="bg-purple-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 transition"
        >
          Add
        </button>
      </form>
    </>
  );
};
