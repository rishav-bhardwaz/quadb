import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/authSlice";
import Auth from "./components/Auth";
import TaskInput from "./components/Taskinput";
import TaskList from "./components/TaskList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isTaskInputOpen, setTaskInputOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {isAuthenticated ? (
        <>
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header onOpen={() => setTaskInputOpen(true)} onLogout={handleLogout} />
            <main className="flex-1 p-6">
              <TaskList />
            </main>
          </div>
          <TaskInput isOpen={isTaskInputOpen} onClose={() => setTaskInputOpen(false)} />
        </>
      ) : (
        <div className="w-full flex items-center justify-center">
          <Auth />
        </div>
      )}
    </div>
  );
};

export default App;
