import { FaHandsHelping, FaUser } from "react-icons/fa";
import { GiDroplets } from "react-icons/gi";
import { RiLockPasswordLine } from "react-icons/ri";

export const defaultMenus = [
  // { title: "Dashboard", path: "/dashboard", icon: MdSpaceDashboard },
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
