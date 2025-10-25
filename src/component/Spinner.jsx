import React from "react";

export default function Spinner() {
  return (
    <div style={{
      display: "flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100px",
    }}>
      <div style={{
        width:"40px",
      height:"40px",
      border:"5px solid #ccc",
      borderTop:"5px solid #4caf60",
      borderRadius:"50%",
      animation:"spin 1s liner infinite",
      }}>
      </div>
    </div>
  );
}