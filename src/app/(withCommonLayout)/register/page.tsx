"use client";

import { authKey } from "@/contants/authkey";
import {
  useLoginMutation,
  useRegisterUserMutation,
  useVerifyEmailMutation,
} from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setToLocalStorage } from "@/utils/local-storage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import EmailVerify from "../components/EmailVerify";
import Register from "../components/Register";

const RegisterAndVerify = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState<boolean | null>(null);

  const [register, { isLoading }] = useRegisterUserMutation();
  const [verifyEmail, { isLoading: isVerifying }] = useVerifyEmailMutation();
  const [loginUser] = useLoginMutation();

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleRegister = async (values: FieldValues) => {
    values.age = parseInt(values.age);
    values.lastDonationDate = values?.lastDonationDate?.split("T")[0];

    try {
      setEmail(values.email);
      setPassword(values.password);

      const res = await register(values).unwrap();
      if (!res.data.isEmailVerified) {
        toast.success("Verify your account");
        setIsEmailVerified(false);
        // ✅ Update Redux state
        dispatch(
          setUser({
            user: {
              ...res.data,
              password: values.password,
            },
          }),
        );
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

  const handleVerification = async (values: FieldValues) => {
    const verifyData = {
      email: email || user?.email,
      code: values.code,
    };

    const loginData = {
      email: email || user?.email,
      password: password || user?.password,
    };

    try {
      const res = await verifyEmail(verifyData).unwrap();
      if (res.success) {
        setIsEmailVerified(true);
        toast.success(res?.message);

        const result = await loginUser(loginData).unwrap();
        if (result.success === true) {
          // ✅ Update Redux state
          dispatch(
            setUser({
              user: result.data.user,
            }),
          );
          setToLocalStorage({ key: authKey, token: result.data.accessToken });
          router.push("/profile");
        }
      }
    } catch (error: any) {
      error?.data?.errorSources?.forEach((err: any) =>
        toast.error(err?.message),
      );
    }
  };
  return (
    <>
      {isEmailVerified || user?.isEmailVerified === false ? (
        <EmailVerify
          handleVerification={handleVerification}
          isVerifying={isVerifying}
        />
      ) : (
        <Register handleRegister={handleRegister} isLoading={isLoading} />
      )}
    </>
  );
};

export default RegisterAndVerify;
