import { useState } from "react";
import { Link } from "react-router-dom"; 
import {
  HomeIcon,
  UserGroupIcon,
  MoonIcon,
  FireIcon,
  FaceSmileIcon,
  CakeIcon,
  HeartIcon,
  TrophyIcon,
  Cog6ToothIcon,
  Bars3Icon,
  BellIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", icon: HomeIcon, path: "/" },
  { name: "Water", icon:FireIcon, path: "/water" },
  { name: "Sleep", icon: MoonIcon, path: "/sleep" },
  { name: "Step", icon: UserGroupIcon, path: "/step" },
  { name: "Mood", icon: FaceSmileIcon, path: "/mood" },
  { name: "Meal", icon: CakeIcon, path: "/meal" },
  { name: "Exercise", icon: HeartIcon, path: "/exercise" },
  { name: "Goals", icon: TrophyIcon, path: "/goal" },
];

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-indigo-600 text-white flex flex-col transition-all duration-300 ${
          collapsed ? "w-15" : "w-64"
        }`}
      >
        {/* Logo + Toggle */}
        <div className="h-16 flex items-center justify-between px-4">
          <span
            className={`font-bold text-lg transition-all ${
              collapsed ? "hidden" : "block"
            }`}
          >
            Tracker-health
          </span>
          <Bars3Icon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path} 
              className="flex items-center px-2 py-2 hover:bg-indigo-500 rounded-md"
            >
              <item.icon className="h-6 w-6 flex-shrink-0" />
              {!collapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="h-16 bg-white shadow flex items-center justify-between px-4">
          <div className="flex items-center space-x-4 ml-auto">
            <BellIcon className="h-6 w-6 text-gray-500" />
            <img
              className="h-8 w-8 rounded-full"
              src="https://i.pravatar.cc/150?img=3"
              alt="user"
            />
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
