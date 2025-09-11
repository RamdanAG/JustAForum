import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/pages/post-detail.css";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // sementara hardcode ambil dari dummy
    const dummyPosts = [
      {
        id: 1,
        author: { username: "ryu_dev", name: "Ryu", avatar: "https://i.pravatar.cc/100?img=1" },
        content: "Hari ini aku lagi coba bikin forum kayak Facebook tapi versi baru 🚀",
        images: [
          "https://picsum.photos/600/400?random=1",
          "https://picsum.photos/600/400?random=2",
          "https://picsum.photos/600/400?random=3",
          "https://picsum.photos/600/400?random=4",
          "https://picsum.photos/600/400?random=5",
          "https://picsum.photos/600/400?random=6",
          "https://picsum.photos/600/400?random=7",
          "https://picsum.photos/600/400?random=8",
          "https://picsum.photos/600/400?random=9",
          "https://picsum.photos/600/400?random=10",
          "https://picsum.photos/600/400?random=11"
        ],
        created_at: "2025-09-10T10:15:00Z",
        stats: { likes: 25, comments: 4, reposts: 2, quotes: 1, saves: 5, shares: 3 }
      },
      {
        id: 2,
        author: { username: "sakura", name: "Sakura", avatar: "https://i.pravatar.cc/100?img=2" },
        content: "Ada yang punya rekomendasi buku buat belajar React? 📚",
        images: ["https://picsum.photos/600/400?random=12"],
        created_at: "2025-09-10T09:50:00Z",
        stats: { likes: 12, comments: 6, reposts: 0, quotes: 2, saves: 3, shares: 1 }
      },
      {
        id: 3,
        author: { username: "alex", name: "Alex", avatar: "https://i.pravatar.cc/100?img=3" },
        content: "Liburan ke Bali kemarin! Ada banyak foto nih 📸",
        images: [
          "https://picsum.photos/600/400?random=13",
          "https://picsum.photos/600/400?random=14",
          "https://picsum.photos/600/400?random=15",
          "https://picsum.photos/600/400?random=16",
          "https://picsum.photos/600/400?random=17",
          "https://picsum.photos/600/400?random=18",
          "https://picsum.photos/600/400?random=19",
          "https://picsum.photos/600/400?random=20"
        ],
        created_at: "2025-09-10T08:30:00Z",
        stats: { likes: 45, comments: 8, reposts: 3, quotes: 1, saves: 12, shares: 5 }
      }
    ];
    
    const foundPost = dummyPosts.find(p => p.id === parseInt(id));
    setPost(foundPost || dummyPosts[0]);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-detail-page">
      <button
        onClick={() => navigate(-1)}
        className="post-detail-back-btn"
      >
        ← Back
      </button>

      <div className="post-detail-author">
        <img src={post.author.avatar} alt={post.author.name} className="post-detail-author-avatar" />
        <div className="post-detail-author-info">
          <div className="post-detail-author-name">{post.author.name}</div>
          <div className="post-detail-author-username">@{post.author.username}</div>
          <div className="post-detail-timestamp">
            {new Date(post.created_at).toLocaleString()}
          </div>
        </div>
      </div>

      <p className="post-detail-content">{post.content}</p>

      {post.images && post.images.length > 0 && (
        <div className="post-detail-images">
          {post.images.length === 1 ? (
            <img 
              src={post.images[0]} 
              alt="post" 
              className="post-detail-image-single" 
            />
          ) : (
            <div className="post-detail-images-grid">
              {post.images.map((img, i) => (
                <img 
                  key={i} 
                  src={img} 
                  alt="post" 
                  className="post-detail-image" 
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="post-detail-stats">
        <button className="post-detail-stat-btn">👍 {post.stats.likes}</button>
        <button className="post-detail-stat-btn">💬 {post.stats.comments}</button>
        <button className="post-detail-stat-btn">🔄 {post.stats.reposts}</button>
        <button className="post-detail-stat-btn">📝 {post.stats.quotes}</button>
        <button className="post-detail-stat-btn">💾 {post.stats.saves}</button>
        <button className="post-detail-stat-btn">📤 {post.stats.shares}</button>
      </div>
    </div>
  );
}
