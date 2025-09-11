export default function RightSidebar() {
    return (
      <div className="space-y-6">
        <div className="bg-gray-900 p-4 rounded-xl">
          <h2 className="text-xl font-bold mb-3">Who to follow</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>@user1</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Follow</button>
            </div>
            <div className="flex items-center justify-between">
              <span>@user2</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Follow</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  