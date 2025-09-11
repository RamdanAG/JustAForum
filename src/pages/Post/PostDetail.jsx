import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // sementara hardcode ambil dari dummy
    const dummy = {
      id: 1,
      author: { username: "ryu_dev", name: "Ryu", avatar: "https://i.pravatar.cc/100?img=1" },
      content: "Hari ini aku lagi coba bikin forum kayak Facebook tapi versi baru 🚀",
      images: [
        "https://picsum.photos/600/400?random=1",
        "https://picsum.photos/600/400?random=2"
      ],
      created_at: "2025-09-10T10:15:00Z",
      stats: { likes: 25, comments: 4, reposts: 2, quotes: 1, saves: 5, shares: 3 }
    };
    setPost(dummy);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white shadow rounded-2xl p-4 mt-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 text-sm mb-3 hover:underline"
      >
        ← Back
      </button>

      <div className="flex items-center gap-3">
        <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
        <div>
          <div className="font-semibold">{post.author.name}</div>
          <div className="text-gray-500 text-sm">@{post.author.username}</div>
          <div className="text-gray-400 text-xs">
            {new Date(post.created_at).toLocaleString()}
          </div>
        </div>
      </div>

      <p className="mt-3 text-gray-800">{post.content}</p>

      {post.images && post.images.length > 0 && (
        <div
          className={`mt-3 grid gap-2 ${
            post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          {post.images.map((img, i) => (
            <img key={i} src={img} alt="post" className="rounded-lg w-full object-cover" />
          ))}
        </div>
      )}

      <div className="flex justify-around mt-4 text-gray-600 text-sm">
        <button className="hover:text-blue-500">👍 {post.stats.likes}</button>
        <button className="hover:text-blue-500">💬 {post.stats.comments}</button>
        <button className="hover:text-blue-500">🔄 {post.stats.reposts}</button>
        <button className="hover:text-blue-500">📝 {post.stats.quotes}</button>
        <button className="hover:text-blue-500">💾 {post.stats.saves}</button>
        <button className="hover:text-blue-500">📤 {post.stats.shares}</button>
      </div>
    </div>
  );
}
