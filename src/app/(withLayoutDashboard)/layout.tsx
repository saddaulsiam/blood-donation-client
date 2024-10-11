import { Input } from "@/components/ui/input";
import SidebarItems from "./dashboard/components/SidebarItems";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex h-screen w-screen">
      <div className="h-full w-2/12 rounded-r-3xl bg-slate-200">
        <aside>
          <span className="ml-10 flex h-28 items-center text-3xl font-extrabold text-gray-800">
            Blood Donation
          </span>
          <SidebarItems />
        </aside>
      </div>
      <div className="h-full w-10/12">
        {/* app bar */}
        <div className="flex h-28 items-center justify-between px-10">
          {/* User name */}
          <div>
            <Input
              className="h-12 min-w-96 border-none bg-slate-100 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:ring-offset-0"
              type="email"
              placeholder="Search..."
            />
          </div>
          {/* User profile */}
          <div>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="mx-10 my-5"> {children} </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
