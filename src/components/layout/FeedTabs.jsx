import { useState } from "react";
import ExploreFeed from "../../pages/Feed/ExploreFeed";
import FollowingFeed from "../../pages/Feed/FollowingFeed";
import ForumList from "../../pages/Group/ForumList";
import "../../styles/layout/feed-tabs.css";

export default function FeedTabs() {
  const [activeTab, setActiveTab] = useState("explore");

  return (
    <div className="feed-tabs-container">
      {/* Tab navigation */}
      <div className="feed-tabs-navigation">
        <button
          onClick={() => setActiveTab("explore")}
          className={`feed-tab-btn ${activeTab === "explore" ? "active" : ""}`}
        >
          Explore
        </button>
        <button
          onClick={() => setActiveTab("following")}
          className={`feed-tab-btn ${activeTab === "following" ? "active" : ""}`}
        >
          Following
        </button>
        <button
          onClick={() => setActiveTab("forum")}
          className={`feed-tab-btn ${activeTab === "forum" ? "active" : ""}`}
        >
          Forum/Grup
        </button>
      </div>

      {/* Content */}
      <div className="feed-tabs-content">
        {activeTab === "explore" && <ExploreFeed />}
        {activeTab === "following" && <FollowingFeed />}
        {activeTab === "forum" && <ForumList />}
      </div>
    </div>
  );
}
