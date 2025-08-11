import { ListItem } from "./ListItem";

export const List = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No tasks in the List</p>
      ) : (
        todos.map((task) => (
          <ListItem
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </ul>
  );
};
