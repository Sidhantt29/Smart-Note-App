import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const { user,logout} = useContext(AppContext);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>Smart Notes</h2>

      {user && (
        <div>
          <span>Welcome, {user}</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;