// app/posts/page.jsx
"use client";

import { useState, useEffect } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fake fetch for demo
    setPosts([
      { id: 1, title: "Post One" },
      { id: 2, title: "Post Two" },
    ]);
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
