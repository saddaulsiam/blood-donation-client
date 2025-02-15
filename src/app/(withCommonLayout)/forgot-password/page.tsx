"use client";

import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import { Mail } from "lucide-react";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { FiDroplet } from "react-icons/fi";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [forgotPassword, { isLoading, isSuccess }] =
    useForgotPasswordMutation();

  const handleForgotPassword = async (values: FieldValues) => {
    try {
      const res = await forgotPassword({ email: values?.email }).unwrap();
      if (res.success) {
        toast.success("Check your email");
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
    <div className="flex items-center bg-gradient-to-br from-gray-50 to-gray-100 p-2 sm:min-h-[calc(100vh-80px)]">
      <div className="mx-auto flex w-[64rem] flex-col overflow-hidden rounded-xl shadow-lg lg:flex-row">
        {/* Illustration Section */}
        <div className="flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 p-12 lg:w-1/2">
          <div className="text-center text-white">
            <FiDroplet className="mx-auto mb-6 h-24 w-24 animate-pulse" />
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Forgot Password?
            </h2>
            <p className="text-xl opacity-90">
              Enter your email to receive a reset link.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-10 sm:p-12 lg:w-1/2">
          <div className="mx-auto">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-gray-900">
                Reset Your Password
              </h1>
              <p className="text-gray-600">
                We&apos;ll send a reset link to your email.
              </p>
            </div>

            <BDForm onSubmit={handleForgotPassword}>
              <div className="space-y-5">
                <div className="relative">
                  <Label className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <BDInput
                      className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
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
                    "Send Reset Link"
                  )}
                </Button>
              </div>
            </BDForm>

            {isSuccess && (
              <p className="mt-4 text-center text-sm text-green-600">
                A password reset link has been sent to your email.
              </p>
            )}

            <p className="mt-6 text-center text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-medium text-red-600 hover:text-red-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
