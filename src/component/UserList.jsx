import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p style={{ color: "red" }}>❌ Error:{error}</p>;
  }
  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2>👤 User List: </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 10,
              marginBottom: 8,
              backgroundColor: "#f8f8f8",
              textAlign: "left",
            }}
          >
            <strong> {user.name}</strong> <br />
            <span>{user.email}</span> <br />
            <small>{user.address?.city}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
