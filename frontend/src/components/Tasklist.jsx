import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <div>
                <p className="font-semibold">{task.text}</p>
                <p className="text-sm text-gray-500">Priority: {task.priority}</p>
              </div>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
