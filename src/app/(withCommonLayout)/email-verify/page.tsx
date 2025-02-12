"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useResendCodeMutation,
  useVerifyEmailMutation,
} from "@/redux/features/auth/authApi";
import { CheckCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EmailVerify = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [verifyEmail, { isLoading: isVerifying }] = useVerifyEmailMutation();
  const [resendCode, { isLoading: isResending }] = useResendCodeMutation();

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerification = async (values: FieldValues) => {
    try {
      const res = await verifyEmail({ email, code: values.code }).unwrap();
      if (res.success) {
        toast.success(res?.message);
        router.push("/login");
      }
    } catch (error: any) {
      error?.data?.errorSources?.forEach((err: any) =>
        toast.error(err?.message),
      );
    }
  };

  const handleResendCode = async () => {
    try {
      const res = await resendCode({ email }).unwrap();
      if (res?.success) {
        toast.success(res.message);
      }
    } catch (error: any) {
      error?.data?.errorSources?.forEach((err: any) =>
        toast.error(err?.message),
      );
    }
  };

  return (
    <div className="flex items-center bg-gradient-to-br from-gray-50 to-gray-100 p-2 sm:min-h-[calc(100vh-80px)]">
      <div className="mx-auto flex w-[64rem] flex-col overflow-hidden rounded-xl shadow-lg lg:flex-row">
        {/* Illustration Section */}
        <div className="flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 p-12 lg:w-1/2">
          <div className="text-center text-white">
            <CheckCircle className="mx-auto mb-6 h-24 w-24 animate-pulse" />
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Verify Your Email
            </h2>
            <p className="text-xl opacity-90">
              Enter the 6-digit code sent to your email.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-12 lg:w-1/2">
          <div className="mx-auto">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-gray-900">
                Enter Code
              </h1>
              <p className="text-gray-600">
                Check your inbox for the verification code.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (code.join("").length === 6) {
                  handleVerification({ code: code.join("") });
                }
              }}
            >
              <div className="space-y-5">
                <div className="flex justify-center gap-2">
                  {code.map((digit, index) => (
                    <Input
                      key={index}
                      ref={(el) => {
                        if (el) inputRefs.current[index] = el;
                      }}
                      className="h-12 w-12 rounded-lg border border-gray-200 text-center text-xl transition duration-200 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                    />
                  ))}
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full bg-red-600 transition-colors duration-200 hover:bg-red-700"
                  disabled={isVerifying || code.join("").length !== 6}
                >
                  {isVerifying ? (
                    <div className="flex items-center justify-center">
                      <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    </div>
                  ) : (
                    "Verify Email"
                  )}
                </Button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Didn’t receive the code?
              <Button
                variant={"link"}
                className="p-1 font-medium text-red-600 hover:text-red-700"
                onClick={handleResendCode}
                disabled={isResending}
              >
                {isResending ? (
                  <div className="flex items-center justify-center">
                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-primary"></div>
                  </div>
                ) : (
                  "Resend Code"
                )}
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
