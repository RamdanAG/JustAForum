import { useState } from "react";
import ExploreFeed from "../../pages/Feed/ExploreFeed";
import FollowingFeed from "../../pages/Feed/FollowingFeed";
import ForumList from "../../pages/Group/ForumList";

export default function FeedTabs() {
  const [activeTab, setActiveTab] = useState("explore");

  return (
    <div>
      {/* Tab navigation */}
      <div className="flex justify-around border-b border-gray-700">
        <button
          onClick={() => setActiveTab("explore")}
          className={`flex-1 py-3 hover:bg-gray-800 ${
            activeTab === "explore" ? "font-bold border-b-2 border-blue-500" : ""
          }`}
        >
          Explore
        </button>
        <button
          onClick={() => setActiveTab("following")}
          className={`flex-1 py-3 hover:bg-gray-800 ${
            activeTab === "following" ? "font-bold border-b-2 border-blue-500" : ""
          }`}
        >
          Following
        </button>
        <button
          onClick={() => setActiveTab("forum")}
          className={`flex-1 py-3 hover:bg-gray-800 ${
            activeTab === "forum" ? "font-bold border-b-2 border-blue-500" : ""
          }`}
        >
          Forum/Grup
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === "explore" && <ExploreFeed />}
        {activeTab === "following" && <FollowingFeed />}
        {activeTab === "forum" && <ForumList />}
      </div>
    </div>
  );
}
