"use client";

import BDDatePicker from "@/components/forms/BDDatePicker";
import BDFile from "@/components/forms/BDFIle";
import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import BDSelect from "@/components/forms/BDSelect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSingleDonorQuery } from "@/redux/features/donors/donorsApi";
import { Gender } from "@/types";
import { bloodGroups } from "@/utils/data";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FiDroplet, FiEdit2 } from "react-icons/fi";

const UpdateProfileForm = () => {
  const { id } = useParams();

  const { data: donarInfo } = useSingleDonorQuery(id);
  const handleSubmit = () => {};

  const [photo, setPhoto] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };

  return (
    <div className="container relative mb-8 rounded-lg border bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg md:p-8">
      {/* Avatar and Profile Info Section */}
      <div className="mb-8 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <div className="relative">
          <Avatar className="h-24 w-24 border-[3px] border-primary shadow-md">
            <AvatarImage
              src={photo || donarInfo?.profile?.photo || "/default-avatar.png"}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary">
              {donarInfo?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <label
            htmlFor="photo"
            className="absolute -bottom-2 right-0 cursor-pointer rounded-full bg-primary p-1.5 text-white shadow-sm transition-all hover:bg-primary/90"
          >
            <FiEdit2 className="h-4 w-4" />
          </label>
        </div>
        <div>
          <h1 className="text-2xl font-bold capitalize text-gray-800">
            {donarInfo?.name}
          </h1>
          <p className="mt-2 text-gray-600">
            {donarInfo?.profile?.bio || "Bio not available"}
          </p>
          <Badge
            variant={donarInfo?.availability ? "default" : "destructive"}
            className="mt-4 gap-2"
          >
            <FiDroplet className="h-4 w-4" />
            {donarInfo?.availability
              ? "Available to donate"
              : "Currently unavailable"}
          </Badge>
        </div>
      </div>

      {/* Form Section */}
      <BDForm onSubmit={handleSubmit}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <BDInput
            name="name"
            defaultValue={donarInfo?.name}
            label="Your Full Name"
            placeholder="John Doe"
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDInput
            name="bio"
            defaultValue={donarInfo?.profile.bio}
            label="Bio"
            placeholder="Your cool bio"
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDSelect
            name="BloodGroup"
            defaultValue={donarInfo?.bloodGroup}
            label="Blood Group"
            placeholder="Select your group"
            values={bloodGroups}
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDInput
            name="Age"
            defaultValue={donarInfo?.profile.age}
            label="Your Age"
            placeholder="23"
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDSelect
            name="gender"
            label="Gender"
            values={Gender}
            defaultValue={donarInfo?.gender}
            placeholder="Select gender"
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDDatePicker
            name="lastDonation"
            label="Last Donation"
            placeholder="Pick your last donation"
            defaultValue={
              donarInfo?.profile?.lastDonationDate
                ? new Date(donarInfo.profile.lastDonationDate)
                    .toISOString()
                    .split("T")[0]
                : ""
            }
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDSelect
            name="availability"
            label="Do you available for donate"
            placeholder={
              donarInfo?.availability
                ? "Available to donate"
                : "Currently unavailable"
            }
            values={["Available to donate", "Currently unavailable"]}
            defaultValue={
              donarInfo?.availability
                ? "Available to donate"
                : "Currently unavailable"
            }
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDFile
            type="file"
            name="photo"
            label="Profile Photo"
            placeholder="Select Photo"
            onChange={handleFileChange}
            className="rounded-lg border border-gray-200 bg-white p-2 focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <Button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 px-6 py-3 text-white transition-all hover:from-primary/90 hover:to-primary"
          >
            <FiEdit2 className="h-5 w-5" /> Update Profile
          </Button>
        </div>
      </BDForm>
    </div>
  );
};

export default UpdateProfileForm;
