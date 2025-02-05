"use client";

import { isLoggedIn } from "@/services/actions/auth.services";
import { logoutUser } from "@/services/actions/logoutUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    setIsUserLoggedIn(isLoggedIn());
  }, []);

  return (
    <div className="container flex h-24 items-center justify-between">
      <div className="flex w-full justify-between text-3xl font-bold">
        <Link href="/">Logo</Link>

        <div className="sm:hidden">
          {!isUserLoggedIn ? (
            <Link href={"/login"}>
              <Button>Login</Button>
            </Link>
          ) : (
            <Button onClick={() => logoutUser(router)}>LogOut</Button>
          )}
        </div>
      </div>

      <ul className="hidden items-center justify-center space-x-10 text-base font-medium text-[#101010B2] sm:flex">
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li>Navbar</li>
        <li>Navbar</li>
        <li>Navbar</li>
        <li>
          {!isUserLoggedIn ? (
            <Link href={"/login"}>
              <Button>Login</Button>
            </Link>
          ) : (
            <Button onClick={() => logoutUser(router)}>LogOut</Button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
