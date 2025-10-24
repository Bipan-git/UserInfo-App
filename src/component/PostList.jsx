import React from "react";

export default function PostList({ posts }) {
  return (
    <div>
      <h2> 📑 Posts List:</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 10,
              marginBottom: 8,
              backgroundColor: "#f4f4f4",
              textAlign: "left",
            }}
          >
            <strong>
              {" "}
              {post.title}
              <p>{post.body}</p>
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
