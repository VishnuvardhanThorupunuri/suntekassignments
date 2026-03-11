import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

const styles={
  cardContainer:{
    display:"flex",
    flexwrap:"wrap",
    gap:"15px"
  }
  card:{
    width:"250px",
    padding:"15px",
    border:"2px solid #ccc",
    borderRadius:"10px",
    boxshadow:"2px 2px 8px rgba(0, 0, 0, 0.1)",

  }
}