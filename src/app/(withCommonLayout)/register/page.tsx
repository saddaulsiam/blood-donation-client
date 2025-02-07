"use client";

import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import { Button } from "@/components/ui/button";
import { authKey } from "@/contants/authkey";
import {
  useLoginMutation,
  useRegisterUserMutation,
} from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setToLocalStorage } from "@/utils/local-storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { FiDroplet } from "react-icons/fi";
import { toast } from "sonner";

const Register = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loginUser] = useLoginMutation();
  const [register] = useRegisterUserMutation();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (values: FieldValues) => {
    setIsLoading(true);
    values.age = parseInt(values.age);
    values.lastDonationDate = values.lastDonationDate.split("T")[0];

    try {
      const res = await register(values).unwrap();
      if (res.success) {
        const result = await loginUser(values).unwrap();
        if (result.success === true) {
          toast.success(result?.message);
          dispatch(setUser({ user: result.data.user }));
          setToLocalStorage({ key: authKey, token: result.data.accessToken });
          router.push("/profile");
        }
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center bg-gradient-to-br from-red-50 to-red-100">
      <div className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-lg lg:flex-row">
        {/* Illustration Section */}
        <div className="flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 p-12 lg:w-1/2">
          <div className="text-center text-white">
            <FiDroplet className="mx-auto mb-6 h-24 w-24 animate-pulse" />
            <h2 className="mb-4 text-4xl font-bold">Save Lives Together</h2>
            <p className="text-xl opacity-90">
              Join our community of life-savers and make a difference today
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-12 lg:w-1/2">
          <div className="mx-auto max-w-md">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-gray-900">
                Create Your Account
              </h1>
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-red-600 hover:text-red-700"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <BDForm onSubmit={handleRegister}>
              <div className="space-y-5">
                <BDInput
                  name="name"
                  label="Full Name"
                  type="text"
                  // icon={<FiUser className="text-gray-400" />}
                  placeholder="John Doe"
                  required
                />

                <BDInput
                  name="email"
                  label="Email Address"
                  type="email"
                  // icon={<FiMail className="text-gray-400" />}
                  placeholder="john@example.com"
                  required
                />

                <BDInput
                  name="password"
                  label="Password"
                  type="password"
                  // icon={<FiLock className="text-gray-400" />}
                  placeholder="••••••••"
                  required
                />
                {/* 
                  <BDInput
                    name="age"
                    label="Age"
                    type="number"
                    // icon={<FiCalendar className="text-gray-400" />}
                    placeholder="18"
                    // min={18}
                    // max={65}
                    required
                  />

                  <BDDatePicker
                    type="date"
                    placeholder="Select Date"
                    name="lastDonationDate"
                    label="Last Donation Date"
                    // icon={<FiDroplet className="text-gray-400" />}
                    required
                  /> */}

                <Button
                  type="submit"
                  className="h-12 w-full bg-red-600 transition-colors duration-200 hover:bg-red-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </div>
            </BDForm>

            <p className="mt-6 text-center text-sm text-gray-600">
              By creating an account, you agree to our{" "}
              <Link
                href="#"
                className="font-medium text-red-600 hover:text-red-700"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="font-medium text-red-600 hover:text-red-700"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
