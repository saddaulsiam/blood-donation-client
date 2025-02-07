"use client";

import DonarProfileDetails from "@/app/(withCommonLayout)/components/DonarProfileDetails";
import { useGetMeQuery } from "@/redux/features/auth/authApi";

const Profile = () => {
  const { data: user } = useGetMeQuery("");
  return (
    <div className="container">
      <DonarProfileDetails donarInfo={user} edit />
    </div>
  );
};

export default Profile;
