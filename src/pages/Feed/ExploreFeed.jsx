import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewPost from "../../components/post/NewPost";
import "../../styles/pages/explore-feed.css";

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

export default function ExploreFeed() {
  const [posts] = useState(dummyPosts);
  const navigate = useNavigate();

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffInSeconds = Math.floor((now - postDate) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} detik yang lalu`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} menit yang lalu`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} jam yang lalu`;
    return `${Math.floor(diffInSeconds / 86400)} hari yang lalu`;
  };

  return (
    <div className="explore-feed-page">
      {/* Main Content */}
      <div className="explore-feed-container">
        <div className="explore-feed-grid">
          {/* Feed Utama */}
          <div className="explore-feed-main">
            {/* Create Post */}
            <NewPost />

            {/* Posts */}
            {posts.map(post => (
              <div
                key={post.id}
                className="post-card"
              >
                {/* Post Header */}
                <div className="post-header">
                  <div className="post-header-content">
                    <div className="post-author-info">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="post-author-avatar"
                      />
                      <div className="post-author-details">
                        <div className="post-author-name">{post.author.name}</div>
                        <div className="post-meta">
                          {formatTimeAgo(post.created_at)} • 
                          <svg className="post-meta-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <button className="post-menu-btn">
                      <svg className="post-menu-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Post Content */}
                <div className="post-content">
                  <p className="post-text">{post.content}</p>
                </div>

                {/* Images */}
                {post.images && post.images.length > 0 && (
                  <div className="post-images">
                    {post.images.length === 1 ? (
                      <img
                        src={post.images[0]}
                        alt="post"
                        className="post-image-single"
                        onClick={() => navigate(`/post/${post.id}`)}
                      />
                    ) : (
                      <div className="post-images-grid">
                        {post.images.slice(0, 6).map((img, i) => (
                          <div key={i} className="post-image-item">
                            <img
                              src={img}
                              alt="post"
                              className="post-image"
                              onClick={() => navigate(`/post/${post.id}`)}
                            />
                            {/* Show +X overlay for the 6th image if there are more than 6 images */}
                            {i === 5 && post.images.length > 6 && (
                              <div 
                                className="post-image-overlay"
                                onClick={() => navigate(`/post/${post.id}`)}
                              >
                                <span className="post-image-overlay-text">
                                  +{post.images.length - 6}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Post Stats */}
                <div className="post-stats">
                  <div className="post-stats-content">
                    <div className="post-stats-left">
                      <span className="post-stat-item">
                        <svg className="post-stat-icon" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span>{post.stats.likes}</span>
                      </span>
                      <span>{post.stats.comments} komentar</span>
                      <span>{post.stats.shares} share</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="post-actions">
                  <div className="post-actions-container">
                    <button className="post-action-btn">
                      <svg className="post-action-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span>Suka</span>
                    </button>
                    <button className="post-action-btn">
                      <svg className="post-action-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                      </svg>
                      <span>Komentar</span>
                    </button>
                    <button className="post-action-btn">
                      <svg className="post-action-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                      </svg>
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
