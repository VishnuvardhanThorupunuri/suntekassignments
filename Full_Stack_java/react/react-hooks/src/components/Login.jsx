import { useContext, useState } from "react";
import UserContext from "./UserContext";

function Login() {
  // local state to store input value
  const [name, setName] = useState("");

  // access user and setUser from context
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter UserName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* button to update global user */}
      <button onClick={() => setUser(name)}>Login</button>

      {/* display current logged user */}
      <h2>Logged User: {user}</h2>
    </div>
  );
}

export default Login;
