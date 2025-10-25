import React from "react";
import UserList from "./component/UserList";

export default function App() {
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>day 11 -fetching with axios + Spinner + Error Handling </h1>
      <UserList />
    </div>
  );
}
