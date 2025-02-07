import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiDroplets } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";

export const defaultMenus = [
  { title: "Dashboard", path: "/dashboard", icon: MdSpaceDashboard },
  { title: "Profile", path: "/profile", icon: FaUser },
  { title: "My Blood Request", path: "/my-blood-request", icon: GiDroplets },
  {
    title: "Change Password",
    path: "/change-password",
    icon: RiLockPasswordLine,
  },
];
