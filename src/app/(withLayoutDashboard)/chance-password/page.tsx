import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <div>
      <h2 className="pb-5 text-2xl font-bold text-gray-700">Change Password</h2>
      <div className="max-w-xl space-y-5">
        <Input
          className="h-12 w-full border-none bg-slate-100 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:ring-offset-0"
          type="text"
          placeholder="Old Password"
        />
        <Input
          className="h-12 w-full border-none bg-slate-100 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:ring-offset-0"
          type="text"
          placeholder="New Password"
        />
        <Input
          className="h-12 w-full border-none bg-slate-100 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:ring-offset-0"
          type="text"
          placeholder="Confirm New Password"
        />
        <Button type="submit" className="h-12 w-full text-base">
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default page;
