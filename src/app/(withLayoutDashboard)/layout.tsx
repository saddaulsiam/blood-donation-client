"use client";

import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import SidebarItems from "./components/SidebarItems";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useAppSelector((state) => state.auth.user);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-gray-50">
      {/* Sidebar for Desktop */}
      <SidebarItems isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* App Bar */}
        <header className="flex h-20 items-center justify-between bg-white px-4 shadow-sm lg:px-12">
          {/* <div> */}
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-600 transition-colors duration-200 hover:text-red-600 lg:hidden"
          >
            <FiMenu className="h-6 w-6" />
          </button>
          {/* </div> */}

          <div>
            <p className="text-sm text-gray-600">Welcome back</p>
            <p className="text-xl capitalize text-gray-800">{user?.name}</p>
          </div>
        </header>

        {/* Content Section */}
        <section className="m-2 flex-1 overflow-auto rounded-lg bg-white p-4 shadow-sm">
          {children}
        </section>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </main>
  );
};

export default Layout;
