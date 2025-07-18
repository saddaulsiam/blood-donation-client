"use client";

import BDDatePicker from "@/components/forms/BDDatePicker";
import BDFile from "@/components/forms/BDFIle";
import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import BDSelect from "@/components/forms/BDSelect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gender } from "@/contants/common";
import withAuth from "@/hooks/withAuth";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { bloodGroups, cities } from "@/utils/data";
import uploadToCloudinary from "@/utils/uploadToCloudinary";
import { Camera } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { FiDroplet, FiEdit2 } from "react-icons/fi";
import { toast } from "sonner";

const UpdateProfileForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { data: user } = useGetMeQuery("");
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  // Store selected image URL
  const [photo, setPhoto] = useState<string | null>(
    user?.profile?.photo || null,
  );

  // Handle file change and show real-time preview
  const handleFileChange = (file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };

  const handleSubmit = async (values: FieldValues) => {
    if (values.photo) {
      values.photo = await uploadToCloudinary(values.photo);
    }

    const data = {
      name: values.name || user?.name || "",
      bloodGroup: values.bloodGroup || user?.bloodGroup || undefined,
      gender: values.gender || user?.gender || undefined,
      city: values.city || user?.city || "",
      availability:
        values.availability === "Available to donate"
          ? true
          : values.availability === "Currently unavailable"
            ? false
            : (user?.availability ?? false),

      bio: values.bio || user?.profile?.bio || "",
      age: Number(values.age) || Number(user?.profile?.age) || undefined,
      photo: values.photo || user?.profile?.photo || "",
      lastDonationDate: values.lastDonationDate
        ? values.lastDonationDate.split("T")[0]
        : user?.profile?.lastDonationDate?.split("T")[0] || undefined,
    };

    try {
      const res = await updateProfile(data).unwrap();
      if (res.success === true) {
        toast.success(res?.message);

        // ✅ Update Redux state
        dispatch(setUser({ user: res.data }));

        router.push("/profile");
      }
    } catch (error: any) {
      console.log({ error });
      error?.data?.errorSources?.map((err: any) => toast.error(err?.message));
    }
  };
  console.log({ user });
  return (
    <div className="container relative mb-8 rounded-lg border bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg md:p-8">
      {/* Avatar and Profile Info Section */}
      <div className="mb-8 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <div className="relative">
          <Avatar className="h-24 w-24 border-[3px] border-primary shadow-md">
            <AvatarImage
              src={photo || user?.profile?.photo || "/default-avatar.png"}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary">
              {user?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <label
            htmlFor="photo"
            className="absolute -bottom-2 right-0 cursor-pointer rounded-full bg-primary p-1.5 text-white shadow-sm transition-all hover:bg-primary/90"
          >
            <Camera className="h-4 w-4" />
          </label>
        </div>
        <div>
          <h1 className="text-2xl font-bold capitalize text-gray-800">
            {user?.name}
          </h1>
          <p className="mt-2 text-gray-600">
            {user?.profile?.bio || "Bio not available"}
          </p>
          <Badge
            variant={user?.availability ? "default" : "outline"}
            className="mt-4"
          >
            <FiDroplet className="mr-2" />
            {user?.availability
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
            defaultValue={user?.name}
            placeholder={user?.name ?? "Jon Doe"}
            label="Your Full Name"
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDInput
            name="bio"
            defaultValue={user?.profile?.bio}
            label="Bio"
            placeholder={user?.profile?.bio ?? "Enter your bio"}
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDSelect
            name="city"
            defaultValue={user?.city}
            values={cities}
            label="Your city"
            placeholder={user?.city ?? "Select Your City"}
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDSelect
            name="bloodGroup"
            defaultValue={user?.bloodGroup}
            label="Blood Group"
            placeholder={user?.bloodGroup ?? "Select Your Blood Group"}
            values={bloodGroups}
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDInput
            name="age"
            defaultValue={user?.profile?.age}
            label="Your Age"
            placeholder={user?.profile?.age?.toString() ?? "e.g.,20"}
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDSelect
            name="gender"
            label="Gender"
            values={Gender}
            defaultValue={user?.gender ?? ""}
            placeholder={user?.gender ?? "Select Your Gender"}
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDDatePicker
            name="lastDonationDate"
            label="Last Donation"
            placeholder={
              user?.profile?.lastDonationDate
                ? user.profile.lastDonationDate
                : "Pick your last donation"
            }
            defaultValue={user?.profile?.lastDonationDate} // Corrected
            before={new Date()}
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />

          <BDSelect
            name="availability"
            label="Are you available to donate?"
            placeholder="Select your availability"
            defaultValue={
              user?.availability
                ? "Available to donate"
                : "Currently unavailable"
            }
            values={["Available to donate", "Currently unavailable"]}
            className="rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/50"
          />
          <BDFile
            name="photo"
            onChange={handleFileChange}
            className="hidden rounded-lg border border-gray-200 bg-white p-2"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <Button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 px-6 py-3 text-white transition-all hover:from-primary/90 hover:to-primary"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
              </div>
            ) : (
              <>
                <FiEdit2 className="h-5 w-5" /> Update Profile
              </>
            )}
          </Button>
        </div>
      </BDForm>
    </div>
  );
};

export default withAuth(UpdateProfileForm);
