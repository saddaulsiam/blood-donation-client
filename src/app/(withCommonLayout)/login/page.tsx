"use client";

import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import { Button } from "@/components/ui/button";
import { authKey, redirectUrl } from "@/contants/authkey";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";
import { Eye, EyeOff, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { FiDroplet } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { isLoading }] = useLoginMutation();

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user?.isEmailVerified === false) {
      router.push("/register");
    }
  }, [user?.isEmailVerified, router]);

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values).unwrap();
      if (res.success === true) {
        toast.success(res?.message);
        // ✅ Update Redux state
        dispatch(
          setUser({
            user: res?.data?.user, // Store logged-in user
          }),
        );

        setToLocalStorage({ key: authKey, token: res.data.accessToken });

        const Url = getFromLocalStorage(redirectUrl) || "/";
        removeFromLocalStorage(redirectUrl);
        router.push(Url);
      }
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

  return (
    <div className="flex items-center bg-gradient-to-br from-gray-50 to-gray-100 p-2 sm:min-h-[calc(100vh-80px)]">
      <div className="mx-auto flex w-[64rem] flex-col overflow-hidden rounded-xl shadow-lg lg:flex-row">
        {/* Illustration Section */}
        <div className="flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 p-12 lg:w-1/2">
          <div className="text-center text-white">
            <FiDroplet className="mx-auto mb-6 h-24 w-24 animate-pulse" />
            <h2 className="mb-4 text-4xl font-bold">Welcome Back!</h2>
            <p className="text-xl opacity-90">
              Log in to continue saving lives
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-12 lg:w-1/2">
          <div className="mx-auto">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-gray-900">Sign In</h1>
              <p className="text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-red-600 hover:text-red-700"
                >
                  Sign up
                </Link>
              </p>
            </div>

            <BDForm onSubmit={handleLogin}>
              <div className="space-y-5">
                <div className="relative">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <MdEmail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
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
                    "Sign In"
                  )}
                </Button>
              </div>
            </BDForm>

            <p className="mt-6 text-center text-sm text-gray-600">
              Forgot your password?{" "}
              <Button
                variant={"link"}
                onClick={() => router.push("/forgot-password")}
                className="p-1 font-medium text-red-600 hover:text-red-700"
              >
                Reset it here
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
