import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username }));
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border"
      />
      <button onClick={handleLogin} className="p-2 bg-blue-500 text-white">
        Login
      </button>
    </div>
  );
};

export default Auth;