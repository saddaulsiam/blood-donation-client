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
import uploadToCloudinary from "@/utils/uploadToCloudinary";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { FiDroplet, FiEdit2 } from "react-icons/fi";

const UpdateProfileForm = () => {
  const { id } = useParams();

  const { data: donorInfo } = useSingleDonorQuery(id);

  // Store selected image URL
  const [photo, setPhoto] = useState<string | null>(
    donorInfo?.profile?.photo || null,
  );

  // Handle file change and show real-time preview
  const handleFileChange = (file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };
  const handleSubmit = async (values: FieldValues) => {
    values.photo = await uploadToCloudinary(values.photo);
    console.log(values);
  };

  return (
    <div className="container relative mb-8 rounded-lg border bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg md:p-8">
      {/* Avatar and Profile Info Section */}
      <div className="mb-8 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <div className="relative">
          <Avatar className="h-24 w-24 border-[3px] border-primary shadow-md">
            <AvatarImage
              src={photo || donorInfo?.profile?.photo || "/default-avatar.png"}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary">
              {donorInfo?.name?.charAt(0)}
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
            {donorInfo?.name}
          </h1>
          <p className="mt-2 text-gray-600">
            {donorInfo?.profile?.bio || "Bio not available"}
          </p>
          <Badge
            variant={donorInfo?.availability ? "default" : "destructive"}
            className="mt-4 gap-2"
          >
            <FiDroplet className="h-4 w-4" />
            {donorInfo?.availability
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
            defaultValue={donorInfo?.name}
            label="Your Full Name"
            placeholder="John Doe"
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDInput
            name="bio"
            defaultValue={donorInfo?.profile.bio}
            label="Bio"
            placeholder="Your cool bio"
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDSelect
            name="bloodGroup"
            defaultValue={donorInfo?.bloodGroup}
            label="Blood Group"
            placeholder="Select your group"
            values={bloodGroups}
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDInput
            name="a ge"
            defaultValue={donorInfo?.profile.age}
            label="Your Age"
            placeholder="23"
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDSelect
            name="gender"
            label="Gender"
            values={Gender}
            defaultValue={donorInfo?.gender}
            placeholder="Select gender"
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDDatePicker
            name="lastDonation"
            label="Last Donation"
            placeholder="Pick your last donation"
            defaultValue={
              donorInfo?.profile?.lastDonationDate
                ? new Date(donorInfo.profile.lastDonationDate)
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
              donorInfo?.availability
                ? "Available to donate"
                : "Currently unavailable"
            }
            values={["Available to donate", "Currently unavailable"]}
            defaultValue={
              donorInfo?.availability
                ? "Available to donate"
                : "Currently unavailable"
            }
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDFile
            name="photo"
            label="Profile Photo"
            onChange={handleFileChange}
            className="rounded-lg border border-gray-200 bg-white p-2"
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
