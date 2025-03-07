const Sidebar = () => {
    return (
      <div className="w-1/4 p-4 bg-gray-100 h-screen">
        <h2 className="text-xl font-semibold mb-4">DoIt</h2>
        <nav>
          <ul>
            <li className="p-2 hover:bg-gray-200 rounded">All Tasks</li>
            <li className="p-2 bg-green-500 text-white rounded">Today</li>
            <li className="p-2 hover:bg-gray-200 rounded">Important</li>
            <li className="p-2 hover:bg-gray-200 rounded">Planned</li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;
  