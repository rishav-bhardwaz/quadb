import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/authSlice";
import Auth from "./components/Auth";
import TaskInput from "./components/Taskinput";
import TaskList from "./components/TaskList";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {!isAuthenticated ? (
        <Auth />
      ) : (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">To-Do App</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
          <TaskInput />
          <TaskList />
        </div>
      )}
    </div>
  );
};

export default App;