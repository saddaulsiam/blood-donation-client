"use client";

import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import { Button } from "@/components/ui/button";
import { authKey, redirectUrl } from "@/contants/authkey";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { FiDroplet } from "react-icons/fi";
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values).unwrap();
      if (res.success === true) {
        toast.success(res?.message);

        dispatch(
          setUser({
            user: res.data.user,
          }),
        );
        setToLocalStorage({ key: authKey, token: res.data.accessToken });
        // Check if there is a stored redirect URL
        const Url = getFromLocalStorage(redirectUrl) || "/dashboard";

        // Clear the stored redirect URL
        removeFromLocalStorage(redirectUrl);
        router.push(Url);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center bg-gradient-to-br from-red-50 to-red-100">
      <div className="mx-auto flex w-[64rem] flex-col overflow-hidden rounded-3xl bg-white shadow-lg lg:flex-row">
        {/* Form Section */}
        <div className="p-12 lg:w-1/2">
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
                <BDInput
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  required
                />

                <BDInput
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  required
                />

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
              <Link
                href="#"
                className="font-medium text-red-600 hover:text-red-700"
              >
                Reset it here
              </Link>
            </p>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Login;
