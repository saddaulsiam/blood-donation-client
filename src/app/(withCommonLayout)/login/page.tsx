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
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();
  const [loginUser] = useLoginMutation();
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
    <section className="flex h-[750px] flex-col items-center justify-center rounded-2xl bg-slate-100">
      <h4 className="text-2xl font-bold text-slate-800">
        Login with Blood Donation Company Name
      </h4>
      <p className="pt-2 text-base font-normal leading-7 text-slate-600">
        Lorem ipsum dolor sit amet consectetur,
      </p>
      <h4 className="pb-5 pt-10 text-3xl font-bold text-slate-800">Login</h4>
      <BDForm onSubmit={handleLogin}>
        <BDInput
          name="email"
          className="mb-5 h-16 max-w-2xl rounded-lg"
          type="email"
          placeholder="Email"
        />
        <BDInput
          name="password"
          className="h-16 max-w-2xl rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="my-3 text-center text-sm font-normal text-gray-700">
          Don&apos;t have a account{" "}
          <Link href="/register">
            <span className="cursor-pointer text-blue-600">Register</span>
          </Link>
        </p>
        <Button type="submit" className="h-16 min-w-[42rem]">
          Login
        </Button>
      </BDForm>

      {/* <p className="mb-5 mt-10 text-xl font-bold text-slate-900 underline underline-offset-2">
        Login with Social Platforms
      </p>
      <ul className="flex space-x-5">
        <li className="size-12 rounded-full bg-slate-800"></li>
        <li className="size-12 rounded-full bg-slate-800"></li>
        <li className="size-12 rounded-full bg-slate-800"></li>
        <li className="size-12 rounded-full bg-slate-800"></li>
      </ul> */}
    </section>
  );
};

export default Login;
