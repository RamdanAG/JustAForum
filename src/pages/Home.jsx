import Sidebar from "../components/layout/Sidebar";
import RightSidebar from "../components/layout/RightSidebar";
import FeedTabs from "../components/layout/FeedTabs";

export default function Home() {
  return (
    <div className="flex max-w-7xl mx-auto">
      {/* Sidebar kiri */}
      <div className="w-1/5 border-r border-gray-800 min-h-screen p-4">
        <Sidebar />
      </div>

      {/* Konten utama */}
      <div className="w-3/5 border-r border-gray-800 min-h-screen">
        
        <FeedTabs />
      </div>

      {/* Sidebar kanan */}
      <div className="w-1/5 p-4 hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  );
}
