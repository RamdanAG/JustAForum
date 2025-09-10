import { useEffect, useState } from "react";

export default function ExploreFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/mock/feed.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Explore Feed</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ddd", margin: "10px 0", padding: "10px" }}>
          <b>{post.user.name}</b> @{post.user.username}
          <p>{post.content}</p>
          <small>
            👍 {post.upvotes} | 💬 {post.comments_count}
          </small>
        </div>
      ))}
    </div>
  );
}
