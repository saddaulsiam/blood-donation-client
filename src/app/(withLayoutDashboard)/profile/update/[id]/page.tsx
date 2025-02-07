"use client";

import BDDatePicker from "@/components/forms/BDDatePicker";
import BDFile from "@/components/forms/BDFIle";
import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import BDSelect from "@/components/forms/BDSelect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <div className="container relative mb-8 rounded-md border bg-white p-6 shadow-sm md:p-8">
      <div className="mb-8 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <Avatar className="h-20 w-20 border-[3px] border-primary">
          <AvatarImage
            src={photo || donarInfo?.profile?.photo || "/default-avatar.png"}
          />
          <AvatarFallback className="bg-primary/10 text-primary">
            {donarInfo?.name?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold capitalize text-gray-800">
            {donarInfo?.name}
          </h1>
          <p className="mt-2 text-gray-600">
            {donarInfo?.profile?.bio || "Bio not available"}
          </p>
          <Badge
            variant={donarInfo?.availability ? "default" : "destructive"}
            className="mt-4"
          >
            <FiDroplet className="mr-2" />
            {donarInfo?.availability
              ? "Available to donate"
              : "Currently unavailable"}
          </Badge>
        </div>
      </div>

      <BDForm onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <BDInput
            name="name"
            defaultValue={donarInfo?.name}
            label="Your Full Name"
            placeholder="John Doe"
          />
          <BDInput
            name="bio"
            defaultValue={donarInfo?.profile.bio}
            label="Bio"
            placeholder="Your cool bio"
          />
          <BDSelect
            name="BloodGroup"
            defaultValue={donarInfo?.bloodGroup}
            label="Blood Group"
            placeholder="Select your group"
            values={bloodGroups}
          />
          <BDInput
            name="Age"
            defaultValue={donarInfo?.profile.age}
            label="Your Age"
            placeholder="23"
          />
          <BDSelect
            name="gender"
            label="Gender"
            values={Gender}
            defaultValue={donarInfo?.gender}
            placeholder="Select gender"
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
          />
          <BDFile
            type="file"
            name="photo"
            label="Profile Photo"
            placeholder="Select Photo"
            onChange={handleFileChange}
            className="rounded-md border p-2"
          />
        </div>
      </BDForm>

      <div className="mt-8 flex justify-end">
        <Button type="submit" className="flex items-center gap-2">
          <FiEdit2 /> Update Profile
        </Button>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
