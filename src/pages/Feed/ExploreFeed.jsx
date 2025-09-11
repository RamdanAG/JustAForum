import { useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyPosts = [
  {
    id: 1,
    author: { username: "ryu_dev", name: "Ryu", avatar: "https://i.pravatar.cc/100?img=1" },
    content: "Hari ini aku lagi coba bikin forum kayak Facebook tapi versi baru 🚀",
    images: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=2",
      "https://picsum.photos/600/400?random=3"
    ],
    created_at: "2025-09-10T10:15:00Z",
    stats: { likes: 25, comments: 4, reposts: 2, quotes: 1, saves: 5, shares: 3 }
  },
  {
    id: 2,
    author: { username: "sakura", name: "Sakura", avatar: "https://i.pravatar.cc/100?img=2" },
    content: "Ada yang punya rekomendasi buku buat belajar React? 📚",
    images: ["https://picsum.photos/600/400?random=4"],
    created_at: "2025-09-10T09:50:00Z",
    stats: { likes: 12, comments: 6, reposts: 0, quotes: 2, saves: 3, shares: 1 }
  }
];

export default function ExploreFeed() {
  const [posts] = useState(dummyPosts);
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">🔥 Explore</h2>

      {posts.map(post => (
        <div
          key={post.id}
          className="bg-white shadow rounded-2xl p-4 mb-6 cursor-pointer hover:shadow-lg transition"
          onClick={() => navigate(`/post/${post.id}`)}
        >
          {/* User Info */}
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-semibold">{post.author.name}</div>
              <div className="text-gray-500 text-sm">@{post.author.username}</div>
              <div className="text-gray-400 text-xs">
                {new Date(post.created_at).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Content */}
          <p className="mt-3 text-gray-800">{post.content}</p>

          {/* Images */}
          {post.images && post.images.length > 0 && (
            <div
              className={`mt-3 grid gap-2 ${
                post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
              }`}
            >
              {post.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="post"
                  className="rounded-lg w-full object-cover"
                />
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-around mt-4 text-gray-600 text-sm">
            <button className="hover:text-blue-500">👍 {post.stats.likes}</button>
            <button className="hover:text-blue-500">💬 {post.stats.comments}</button>
            <button className="hover:text-blue-500">🔄 {post.stats.reposts}</button>
            <button className="hover:text-blue-500">📝 {post.stats.quotes}</button>
            <button className="hover:text-blue-500">💾 {post.stats.saves}</button>
            <button className="hover:text-blue-500">📤 {post.stats.shares}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
