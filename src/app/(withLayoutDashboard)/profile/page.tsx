"use client";

import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import BDSelect from "@/components/forms/BDSelect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { availability, bloodGroups, cities } from "@/utils/data";

const Profile = () => {
  const { data: user } = useGetMeQuery("");
  return (
    <div className="max-w-6xl rounded-lg bg-slate-100 p-16">
      <div className="flex justify-between">
        <div className="flex items-center justify-center space-x-5">
          <Avatar className="h-20 w-20">
            <AvatarImage
              src={user?.profile?.photo || "https://github.com/shadcn.png"}
              alt="profile photo"
            />
            <AvatarFallback>{user?.name.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold capitalize text-gray-700">
              {user?.name}
            </h2>
            <p className="max-w-80 text-base text-gray-600">
              Bio:{" "}
              {user?.profile?.bio
                ? user?.profile?.bio
                : "Please change your bio"}
            </p>
          </div>
        </div>
        <div className="cursor-pointer text-xl font-medium text-gray-600">
          {/* Edit Profile */}
          <EditProfileModel />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-6">
        <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
          <h4 className="text-sm font-medium text-gray-500">Gender</h4>
          <p className="text-md font-semibold text-slate-700">
            {user?.gender ? user?.gender : "N/A"}
          </p>
        </div>
        <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
          <h4 className="text-sm font-medium text-gray-500">Age</h4>
          <p className="text-md font-semibold text-slate-700">
            {user?.profile.age ? user?.profile.age : "N/A"}
          </p>
        </div>
        <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
          <h4 className="text-sm font-medium text-gray-500">Blood Type</h4>
          <p className="text-md font-semibold text-slate-700">
            {user?.bloodType ? user?.bloodType : "N/A"}
          </p>
        </div>
        <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
          <h4 className="text-sm font-medium text-gray-500">Last Donation</h4>
          <p className="text-md font-semibold text-slate-700">
            {user?.profile.lastDonationDate
              ? user?.profile.lastDonationDate.split("T")[0]
              : "N/A"}
          </p>
        </div>
        <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
          <h4 className="text-sm font-medium text-gray-500">Availability</h4>
          <p className="text-md font-semibold text-slate-700">
            {user?.availability ? "Yes" : "NO"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

const EditProfileModel = () => {
  const handleSubmit = () => {};
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <BDForm onSubmit={handleSubmit}>
          <div className="space-y-3">
            <BDInput
              name="name"
              type="text"
              placeholder="Name"
              className=""
              required
            />
            <BDInput
              name="email"
              type="text"
              placeholder="Email"
              className=""
              required
            />
            <BDInput
              name="age"
              placeholder="Age"
              type="number"
              className=""
              required
            />
            <BDSelect
              values={bloodGroups}
              name="bloodGroups"
              label="Blood Groups"
              className=""
              required
            />
            <BDSelect
              values={cities}
              name="reason"
              label="City"
              className=""
              required
            />
            <BDSelect
              values={availability}
              name="availability"
              label="Do you Available "
              className=""
              required
            />
          </div>
        </BDForm>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
