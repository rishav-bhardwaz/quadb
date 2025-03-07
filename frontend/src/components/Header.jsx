const Header = ({ onOpen }) => {
    return (
      <header className="p-4 bg-white shadow flex justify-between">
        <h1 className="text-xl font-semibold">To Do</h1>
        <button
          onClick={onOpen}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          + Add Task
        </button>
      </header>
    );
  };
  
  export default Header;
  