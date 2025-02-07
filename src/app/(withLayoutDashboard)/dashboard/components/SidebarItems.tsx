"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { defaultMenus } from "@/utils/drawerItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItems = ({ isSidebarOpen }: any) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed z-30 flex h-full w-64 flex-col justify-between bg-white p-6 shadow-lg transition-all duration-300 ease-in-out lg:relative lg:z-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div>
        <h2 className="mb-10 text-2xl font-bold text-red-600">
          Blood Donation
        </h2>
        <nav className="flex-1">
          <ul className="space-y-2">
            {defaultMenus.map((menu, i) => (
              <li key={i}>
                <Link
                  href={menu.path}
                  className={`flex items-center rounded-lg p-3 transition-all duration-200 ${
                    pathname === menu.path
                      ? "bg-red-50 font-semibold text-red-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {menu.icon && <span className="mr-3">{<menu.icon />}</span>}
                  <span>{menu.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Profile Section at the Bottom */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarItems;
