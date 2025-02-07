"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import SidebarItems from "./dashboard/components/SidebarItems";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        <header className="flex h-20 items-center justify-between bg-white px-4 shadow-sm lg:px-6">
          <div>
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-600 transition-colors duration-200 hover:text-red-600 lg:hidden"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
          <Avatar className="h-10 w-10 cursor-pointer transition-shadow duration-200 hover:shadow-md">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
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

export default Dashboard;
