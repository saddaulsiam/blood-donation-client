import { FaHandsHelping, FaUser } from "react-icons/fa";
import { GiDroplets } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  RiAdminLine,
  RiLockPasswordLine,
  RiTodoLine,
  RiUserSettingsLine,
} from "react-icons/ri";

export const userMenus = [
  { title: "Profile", path: "/profile", icon: FaUser },
  {
    title: "Request To Donate",
    path: "/request-to-donate",
    icon: FaHandsHelping,
  },
  {
    title: "My Donate Request",
    path: "/my-donate-request",
    icon: GiDroplets,
  },
  {
    title: "Change Password",
    path: "/change-password",
    icon: RiLockPasswordLine,
  },
];

export const adminMenus = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LuLayoutDashboard,
  },
  {
    title: "Make Admin",
    path: "/make-admin",
    icon: RiAdminLine, // Changed icon
  },
  {
    title: "Manage Donors",
    path: "/manage-donors",
    icon: RiUserSettingsLine, // Changed icon
  },
  {
    title: "Manage Requests",
    path: "/manage-requests",
    icon: RiTodoLine, // Changed icon
  },

  // {
  //   title: "Change Password",
  //   path: "/change-password",
  //   icon: RiLockPasswordLine,
  // },
];
