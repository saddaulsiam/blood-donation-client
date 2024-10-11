"use client";

import { defaultMenus } from "@/utils/drawerItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItems = () => {
  const pathname = usePathname();

  return (
    <div className="ml-10 mt-20">
      <ul className="space-y-5 text-lg">
        {defaultMenus.map((menu, i) => {
          return (
            <li
              key={i}
              className={`cursor-pointer text-slate-500 ${
                pathname === menu.path &&
                "border-r-2 border-r-gray-500 font-semibold text-gray-900"
              }`}
            >
              <Link href={menu.path} key={i}>
                {menu.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarItems;
