import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Pages
import ExploreFeed from "./pages/Feed/ExploreFeed";
// import FollowingFeed from "./pages/Feed/FollowingFeed";
import UserProfile from "./pages/User/UserProfile";
import GroupDetail from "./pages/Group/GroupDetail";
import PostDetail from "./pages/Post/PostDetail";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main App Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<ExploreFeed />} />
          {/* <Route path="/following" element={<FollowingFeed />} /> */}
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/group/:slug" element={<GroupDetail />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
