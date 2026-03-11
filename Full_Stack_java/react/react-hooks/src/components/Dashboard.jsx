import { useContext } from "react";
import UserContext from "./UserContext";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome, {user ? user : "Guest"}!</h3>
    </div>
  );
}

export default Dashboard;
