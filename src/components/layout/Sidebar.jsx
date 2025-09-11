import { Home, Compass, Users, User } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-6 text-lg font-medium">
      <a href="/" className="flex items-center gap-3 hover:text-blue-500">
        <Home /> Home
      </a>
      <a href="/explore" className="flex items-center gap-3 hover:text-blue-500">
        <Compass /> Explore
      </a>
      <a href="/forum" className="flex items-center gap-3 hover:text-blue-500">
        <Users /> Forum
      </a>
      <a href="/profile" className="flex items-center gap-3 hover:text-blue-500">
        <User /> Profile
      </a>
    </nav>
  );
}
