"use client";

import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import { Button } from "@/components/ui/button";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Eye, EyeOff, Lock } from "lucide-react";
import { toast } from "sonner";
import { FiDroplet } from "react-icons/fi";

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const userId = searchParams.get("userId");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleResetPassword = async (values: FieldValues) => {
    if (values.password !== values.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await resetPassword({
        token,
        id: userId,
        password: values.password,
      }).unwrap();

      if (res.success) {
        toast.success("Password reset successfully!");
        router.push("/login");
      }
    } catch (error: any) {
      if (error?.data?.message !== "Validation Error") {
        toast.error(error?.data?.message);
      }

      if (error?.data?.message === "Validation Error") {
        error?.data?.errorSources?.forEach((err: any) =>
          toast.error(err?.message),
        );
      }
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto flex w-[64rem] flex-col overflow-hidden rounded-xl shadow-lg lg:flex-row">
        {/* Illustration Section */}
        <div className="flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 p-12 lg:w-1/2">
          <div className="text-center text-white">
            <FiDroplet className="mx-auto mb-6 h-24 w-24 animate-pulse" />
            <h2 className="mb-4 text-4xl font-bold">Reset Your Password</h2>
            <p className="text-xl opacity-90">
              Choose a new password to continue
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-12 lg:w-1/2">
          <div className="mx-auto">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-gray-900">
                Reset Password
              </h1>
              <p className="text-gray-600">Enter your new password below.</p>
            </div>

            <BDForm onSubmit={handleResetPassword}>
              <div className="space-y-5">
                <div className="relative">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <BDInput
                      className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-12 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <BDInput
                      className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-12 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

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
                    "Reset Password"
                  )}
                </Button>
              </div>
            </BDForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
