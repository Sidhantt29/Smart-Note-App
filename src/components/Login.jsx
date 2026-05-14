import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function Login() {
  const { login } = useContext(AppContext);
  const [name, setName] = useState("");
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => login(name)}>Login</button>
    </div>
  );
}
export default Login;
