import { FaUser } from "react-icons/fa";
import { GiDroplets } from "react-icons/gi";
import { LuDroplets } from "react-icons/lu";
import { MdSpaceDashboard } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export const defaultMenus = [
  // { title: "Dashboard", path: "/dashboard", icon: MdSpaceDashboard },
  { title: "Profile", path: "/profile", icon: FaUser },
  {
    title: "Request To Donate",
    path: "/request-to-donate",
    icon: LuDroplets,
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
