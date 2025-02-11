import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const EmailVerify = ({ handleVerification, isVerifying }: any) => {
  return (
    <div className="flex min-h-screen items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-md rounded-xl bg-white p-10 shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Verify Your Email
          </h1>
          <p className="mt-2 text-gray-600">
            Enter the verification code sent to your email.
          </p>
        </div>

        <BDForm onSubmit={handleVerification}>
          <div className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Verification Code
              </label>
              <div className="relative">
                <CheckCircle className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <BDInput
                  className="w-full rounded-lg border-gray-300 bg-gray-50 pl-10"
                  name="code"
                  type="text"
                  placeholder="Enter verification code"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
              disabled={isVerifying}
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
        </BDForm>

        <p className="mt-4 text-center text-sm text-gray-600">
          Didn’t receive the code?{" "}
          <Link
            href="#"
            className="font-medium text-red-600 hover:text-red-700"
          >
            Resend Code
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EmailVerify;
