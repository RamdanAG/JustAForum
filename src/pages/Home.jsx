import { useState } from "react";
import ExploreFeed from "./Feed/ExploreFeed";
import FollowingFeed from "./Feed/FollowingFeed";
import ForumList from "./Group/ForumList";

export default function Home() {
  const [activeTab, setActiveTab] = useState("explore");

  return (
    <div>
      {/* Navbar Tabs */}
      <div style={{ display: "flex", gap: "20px", borderBottom: "1px solid #ddd", marginBottom: "20px" }}>
        <button 
          onClick={() => setActiveTab("explore")}
          style={{ fontWeight: activeTab === "explore" ? "bold" : "normal" }}
        >
          Explore
        </button>
        <button 
          onClick={() => setActiveTab("following")}
          style={{ fontWeight: activeTab === "following" ? "bold" : "normal" }}
        >
          Following
        </button>
        <button 
          onClick={() => setActiveTab("forum")}
          style={{ fontWeight: activeTab === "forum" ? "bold" : "normal" }}
        >
          Forum/Grup
        </button>
      </div>

      {/* Content Switch */}
      {activeTab === "explore" && <ExploreFeed />}
      {activeTab === "following" && <FollowingFeed />}
      {activeTab === "forum" && <ForumList />}
    </div>
  );
}
