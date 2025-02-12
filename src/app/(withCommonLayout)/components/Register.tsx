"use client";

import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail, Phone, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FiDroplet } from "react-icons/fi";

const Register = ({ handleRegister, isLoading }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center bg-gradient-to-br from-gray-50 to-gray-100 p-2 sm:min-h-[calc(100vh-80px)]">
      <div className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-lg lg:flex-row">
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
                <div className="relative">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <BDInput
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-12 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <BDInput
                      required
                      name="phoneNumber"
                      type="text"
                      placeholder="017********"
                      className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-12 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <BDInput
                      className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-12 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <BDInput
                      className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-12 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
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
      </div>
    </div>
  );
};

export default Register;
