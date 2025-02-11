"use client";

import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [forgotPassword, { isLoading, isSuccess }] =
    useForgotPasswordMutation();

  const handleForgotPassword = async (values: FieldValues) => {
    try {
      const res = await forgotPassword({ email: values?.email }).unwrap();
      if (res.success) {
        toast.success("Check you email");
      }
    } catch (error) {
      console.error("Error sending reset link:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-md rounded-xl bg-white p-10 shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Forgot Password</h1>
          <p className="mt-2 text-gray-600">
            Enter your email to receive a password reset link.
          </p>
        </div>

        <BDForm onSubmit={handleForgotPassword}>
          <div className="mt-6 space-y-6">
            <div>
              <Label className="block pb-1 text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <BDInput
                  className="w-full rounded-lg border-gray-300 bg-gray-50 pl-10"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
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

        <p className="mt-4 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link
            href={"/login"}
            className="font-medium text-red-600 hover:text-red-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
