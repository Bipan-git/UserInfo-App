import React from "react";

export default function UserList({ users }) {
  return (
    <div style={{ marginBottom: 30 }}>
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
