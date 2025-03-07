import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, priority: "Medium" }));
      setTask("");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-2 border"
      />
      <button onClick={handleAddTask} className="p-2 bg-green-500 text-white">
        Add
      </button>
    </div>
  );
};

export default TaskInput;