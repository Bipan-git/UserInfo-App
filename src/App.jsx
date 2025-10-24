import React, { useEffect, useState } from "react";
import UserList from "./component/UserList";
import PostList from "./component/PostList";

export default function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPosts, setShowPosts] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, postRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/posts"),
        ]);

        if (!userRes.ok || !postRes.ok) {
          throw new Error("Network response was not ok");
        }

        const usersData = await userRes.json();
        const postsData = await postRes.json();

        setUsers(usersData);
        setPosts(postsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>⏳ Loading data...</p>;
  if (error) return <p style={{ color: "red" }}>❌ Error: {error}</p>;

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Day 10 - Fetching Multiple APIs (Users + Posts)</h1>
      <UserList users={users} />

      <button
        onClick={() => setShowPosts(!showPosts)}
        style={{
          padding: "10px 20px",
          margin: "20px 0",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>

      {showPosts && <PostList posts={posts} />}
    </div>
  );
}
