"use client";

import DatePicker from "@/components/forms/BDDatePicker";
import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import BDSelect from "@/components/forms/BDSelect";
import { Button } from "@/components/ui/button";
import { authKey } from "@/contants/authkey";
import {
  useLoginMutation,
  useRegisterUserMutation,
} from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { bloodGroups, cities } from "@/utils/data";
import { setToLocalStorage } from "@/utils/local-storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Register = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loginUser] = useLoginMutation();
  const [register] = useRegisterUserMutation();

  const handleRegister = async (values: FieldValues) => {
    values.age = parseInt(values.age);

    try {
      const res = await register(values).unwrap();
      if (res.success) {
        const result = await loginUser(values).unwrap();
        if (result.success === true) {
          toast.success(result?.message);

          dispatch(
            setUser({
              user: result.data.user,
            }),
          );
          setToLocalStorage({ key: authKey, token: result.data.accessToken });

          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };
  return (
    <section className="flex flex-col items-center justify-center rounded-2xl bg-slate-100 pb-24 pt-16">
      <h4 className="text-2xl font-bold text-slate-800">
        Register Blood Donation Company Name
      </h4>
      <p className="pt-2 text-base font-normal leading-7 text-slate-600">
        Lorem ipsum dolor sit amet consectetur,
      </p>
      <h4 className="pb-5 pt-10 text-3xl font-bold text-slate-800">
        Registration
      </h4>
      <BDForm onSubmit={handleRegister}>
        <div className="space-y-3">
          <BDInput
            className="h-14 max-w-2xl rounded-lg"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <BDInput
            className="h-14 max-w-2xl rounded-lg"
            type="number"
            name="age"
            placeholder="Age"
            required
          />
          <BDInput
            className="h-14 max-w-2xl rounded-lg"
            type="number"
            name="phone"
            placeholder="Phone"
            required
          />

          <BDSelect
            bloodGroups={bloodGroups}
            className="h-14 w-full"
            label="Blood Groups"
            name="bloodType"
            required
          />
          <BDSelect
            bloodGroups={cities}
            className="h-14 w-full"
            label="Your City"
            name="location"
            required
          />
          <DatePicker
            name="lastDonationDate"
            placeholder="Last Donation Date (Optional)"
            className="mb-5 h-14 max-w-2xl"
          />
          <BDInput
            className="h-14 max-w-2xl rounded-lg"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <BDInput
            className="h-14 max-w-2xl rounded-lg"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <p className="my-3 text-center text-sm font-normal text-gray-700">
          Already have a account{" "}
          <Link href="/login">
            <span className="cursor-pointer text-blue-600">Login</span>
          </Link>
        </p>
        <Button type="submit" className="h-14 min-w-[42rem]">
          Register
        </Button>
      </BDForm>
      {/* <p className="mt-10 text-xl font-bold text-slate-900 underline underline-offset-2">
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

export default Register;
