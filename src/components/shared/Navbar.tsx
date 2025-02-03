import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="mx-auto flex h-28 w-full max-w-7xl items-center justify-between">
      <div className="text-3xl font-bold">
        <Link href="/">Logo</Link>
      </div>
      <ul className="flex items-center justify-center space-x-10 text-base font-medium text-[#101010B2]">
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li>Navbar</li>
        <li>Navbar</li>
        <li>Navbar</li>
        <li>Navbar</li>
      </ul>
      <Link href={"/login"}>
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default Navbar;
