"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authKey } from "@/contants/authkey";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutUser } from "@/services/actions/auth.services";
import { removeFromLocalStorage } from "@/utils/local-storage";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "../../../public/logo.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get user from Redux state (Will update UI on login/logout)
  const user = useAppSelector((state) => state.auth.user);
  const isUserLoggedIn = !!user; // Convert user object to boolean

  const handleLogout = () => {
    logoutUser(router);
    dispatch(setUser({ user: null! })); // Clear user state
    removeFromLocalStorage(authKey);
  };

  return (
    <div className="container flex h-20 items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center space-x-1 text-3xl font-extrabold text-gray-800 hover:text-primary">
          <Image src={logo} width={35} height={35} alt="logo" />
          <p>Logo</p>
        </div>
      </Link>

      {/* Desktop Navbar */}
      <ul className="hidden items-center space-x-8 text-lg font-medium text-gray-700 md:flex">
        <li>
          <Link
            href="/my-donate-request"
            className="transition duration-300 hover:text-primary"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="transition duration-300 hover:text-primary"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#services"
            className="transition duration-300 hover:text-primary"
          >
            Services
          </Link>
        </li>
        <li>
          {isUserLoggedIn && user?.isEmailVerified ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* <button className="relative flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary"> */}
                <Avatar className="h-10 w-10 transition-all hover:scale-105">
                  <AvatarImage
                    src={user?.profile?.photo || "/default-avatar.png"}
                    alt="User Profile"
                  />
                  <AvatarFallback>{user?.name || "U"}</AvatarFallback>
                </Avatar>
                {/* </button> */}
              </DropdownMenuTrigger>

              {/* Dropdown Content */}
              <DropdownMenuContent
                className="w-56 rounded-lg bg-white shadow-md"
                side="bottom"
                align="end"
                sideOffset={10}
              >
                <DropdownMenuLabel className="px-4 py-2 text-sm font-semibold capitalize text-gray-700">
                  {user?.name || "User"}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/request-to-donate"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Request To Donate
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/my-donate-request"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Donation Requests
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/change-password"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Change Password
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                {/* Logout Button */}
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="w-full cursor-pointer rounded-b-lg bg-red-500 px-4 py-2 text-center text-white hover:bg-red-600"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600">
                Login
              </Button>
            </Link>
          )}
        </li>
      </ul>

      {/* Mobile Navbar */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute left-0 top-20 w-full bg-white shadow-lg md:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-medium text-gray-700">
          <li>
            <Link
              href="/my-donate-request"
              className="transition duration-300 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="transition duration-300 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="transition duration-300 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            {isUserLoggedIn && user?.isEmailVerified ? (
              <Button
                onClick={handleLogout}
                className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600"
              >
                Logout
              </Button>
            ) : (
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600">
                  Login
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
