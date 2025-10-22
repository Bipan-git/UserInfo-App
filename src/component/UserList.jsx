import React, { useEffect, useState } from "react";

export default function UserList() {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("NetWork response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading user....</p>;
  }
  if (error) {
    return <p style={{ color: "red" }}> Error</p>;
  }
  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2>Fetched User:</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {user.map((user) => (
          <li
            key={user.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 12,
              marginBottom: 10,
              backgroundColor: "#fafafa",
              textAlign: "left",
            }}
          >
            <strong>{user.name}</strong>
            <br />
            <span>{user.email}</span>
            <br />
            <small>{user.address.city}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
