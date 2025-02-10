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
import { logoutUser } from "@/services/actions/logoutUser";
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
          {!isUserLoggedIn ? (
            <Link href="/login">
              <Button className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600">
                Login
              </Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <Avatar>
                  <AvatarImage
                    src={
                      user?.profile?.photo || "https://github.com/shadcn.png"
                    }
                    alt="@shadcn"
                  />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link href={"/profile"}>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <Link href={"/request-to-donate"}>
                    <DropdownMenuItem>Request To Donate</DropdownMenuItem>
                  </Link>
                  <Link href={"/my-donate-request"}>
                    <DropdownMenuItem>My Donation Requests</DropdownMenuItem>
                  </Link>
                  <Link href={"/change-password"}>
                    <DropdownMenuItem>Change Password</DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
            {!isUserLoggedIn ? (
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600">
                  Login
                </Button>
              </Link>
            ) : (
              <Button
                onClick={handleLogout}
                className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600"
              >
                Logout
              </Button>
            )}
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
