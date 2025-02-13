"use client";

import { Button } from "@/components/ui/button";
import { authKey } from "@/contants/authkey";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { logoutUser } from "@/services/actions/auth.services";
import { defaultMenus } from "@/utils/drawerItems";
import { removeFromLocalStorage } from "@/utils/local-storage";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LuLogOut } from "react-icons/lu";

const SidebarItems = ({ isSidebarOpen }: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    logoutUser(router);
    dispatch(setUser({ user: null! }));
    // removeFromLocalStorage(authKey);
  };
  return (
    <aside
      className={`fixed z-30 flex h-full w-64 flex-col justify-between bg-white p-6 shadow-lg transition-all duration-300 ease-in-out lg:relative lg:z-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div>
        <Link href={"/"}>
          <h2 className="mb-10 text-2xl font-bold text-red-600">
            Blood Donation
          </h2>
        </Link>
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
        <Button className="w-full" onClick={handleLogout}>
          Logout <LuLogOut />
        </Button>
      </div>
    </aside>
  );
};

export default SidebarItems;
