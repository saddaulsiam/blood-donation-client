// "use client";

// import { isLoggedIn } from "@/services/actions/auth.services";
// import { logoutUser } from "@/services/actions/logoutUser";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Button } from "../ui/button";

// const Navbar = () => {
//   const router = useRouter();
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     setIsUserLoggedIn(isLoggedIn());
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLogout = () => {
//     logoutUser(router);
//     setIsUserLoggedIn(false); // Immediately update UI
//     toggleMenu();
//   };

//   return (
//     <div className="container flex h-20 items-center justify-between">
//       {/* Logo */}
//       <div className="flex items-center space-x-4">
//         <Link
//           href="/"
//           className="text-3xl font-extrabold text-primary hover:text-gray-700"
//         >
//           Logo
//         </Link>
//       </div>

//       {/* Desktop Navbar */}
//       <ul className="hidden items-center space-x-8 text-lg font-medium text-gray-700 md:flex">
//         <li>
//           <Link
//             href="/dashboard"
//             className="transition duration-300 hover:text-primary"
//           >
//             Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/about"
//             className="transition duration-300 hover:text-primary"
//           >
//             About
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/services"
//             className="transition duration-300 hover:text-primary"
//           >
//             Services
//           </Link>
//         </li>
//         <li>
//           {!isUserLoggedIn ? (
//             <Link href="/login">
//               <Button className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600">
//                 Login
//               </Button>
//             </Link>
//           ) : (
//             <Button
//               onClick={handleLogout}
//               className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600"
//             >
//               Logout
//             </Button>
//           )}
//         </li>
//       </ul>

//       {/* Mobile Navbar */}
//       <div className="flex items-center md:hidden">
//         <button onClick={toggleMenu} className="focus:outline-none">
//           {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
//         transition={{ duration: 0.3 }}
//         className={`absolute left-0 top-20 w-full bg-white shadow-lg md:hidden ${
//           isMenuOpen ? "block" : "hidden"
//         }`}
//       >
//         <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-medium text-gray-700">
//           <li>
//             <Link
//               href="/dashboard"
//               className="transition duration-300 hover:text-primary"
//               onClick={toggleMenu}
//             >
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/about"
//               className="transition duration-300 hover:text-primary"
//               onClick={toggleMenu}
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/services"
//               className="transition duration-300 hover:text-primary"
//               onClick={toggleMenu}
//             >
//               Services
//             </Link>
//           </li>
//           <li>
//             {!isUserLoggedIn ? (
//               <Link href="/login" onClick={toggleMenu}>
//                 <Button className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600">
//                   Login
//                 </Button>
//               </Link>
//             ) : (
//               <Button
//                 onClick={handleLogout}
//                 className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600"
//               >
//                 Logout
//               </Button>
//             )}
//           </li>
//         </ul>
//       </motion.div>
//     </div>
//   );
// };

// export default Navbar;
"use client";

import { useSelector } from "react-redux";
import { logoutUser } from "@/services/actions/logoutUser";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../ui/button";
import { removeFromLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/contants/authkey";
import { setUser } from "@/redux/features/auth/authSlice";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Get user from Redux state (Will update UI on login/logout)
  const user = useSelector((state: any) => state.auth.user);
  const isUserLoggedIn = !!user; // Convert user object to boolean

  const handleLogout = () => {
    logoutUser(router);
    dispatch(setUser({ user: null! })); // Clear user state
    removeFromLocalStorage(authKey);
  };

  return (
    <div className="container flex h-20 items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Link
          href="/"
          className="text-3xl font-extrabold text-primary hover:text-gray-700"
        >
          Logo
        </Link>
      </div>

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
          <Link href="#" className="transition duration-300 hover:text-primary">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="transition duration-300 hover:text-primary">
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
            <Button
              onClick={handleLogout}
              className="rounded-lg bg-red-500 px-6 py-2 text-white transition duration-300 hover:bg-red-600"
            >
              Logout
            </Button>
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
              href="/dashboard"
              className="transition duration-300 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition duration-300 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
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
