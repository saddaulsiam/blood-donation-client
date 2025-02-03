"use client";

import BDDatePicker from "@/components/forms/BDDatePicker";
import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import BDTextarea from "@/components/forms/BDTextarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import withAuth from "@/hooks/withAuth";
import { useBloodRequestMutation } from "@/redux/features/bloodRequest/bloodRequestApi";
import { useSingleDonorQuery } from "@/redux/features/donors/donorsApi";
import { useParams, useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Profile = () => {
  const router = useRouter();
  const { id } = useParams();

  const { data: donorInfo } = useSingleDonorQuery(id);
  const [bloodRequest] = useBloodRequestMutation();

  const handleSubmit = (values: FieldValues) => {
    const data = {
      donorId: donorInfo?.id,
      name: values.name,
      phoneNumber: values.number,
      dateOfDonation: values.date.split("T")[0],
      hospitalName: values.hospitalName,
      reason: donorInfo?.reason,
    };
    try {
      bloodRequest(data).then((response) => {
        if (response.data.data.success) {
          console.log(response.data);
          toast.success("Success");
          router.push("/dashboard");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="p-0">
      <div className="rounded-xl bg-slate-100 p-12">
        <div className="flex space-x-5">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="mb-3 text-2xl font-semibold text-slate-900">
              Donor profile details
            </h4>
            <p className="text-base font-medium text-slate-600">
              Name: {donorInfo?.name}
            </p>
            <p className="text-base font-medium text-slate-600">
              Bio: {donorInfo?.profile?.bio}
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-7">
          <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
            <h4 className="text-sm font-medium text-gray-500">Gender</h4>
            <p className="text-md font-semibold text-slate-700">
              {donorInfo?.gender}
            </p>
          </div>
          <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
            <h4 className="text-sm font-medium text-gray-500">Age</h4>
            <p className="text-md font-semibold text-slate-700">
              {donorInfo?.profile?.age}
            </p>
          </div>
          <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
            <h4 className="text-sm font-medium text-gray-500">Blood Type</h4>
            <p className="text-md font-semibold text-slate-700">A_POSITIVE</p>
          </div>
          <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
            <h4 className="text-sm font-medium text-gray-500">Last Donation</h4>
            <p className="text-md font-semibold text-slate-700">2024-03-25</p>
          </div>
          <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
            <h4 className="text-sm font-medium text-gray-500">Availability</h4>
            <p className="text-md font-semibold text-slate-700">NO</p>
          </div>
        </div>
      </div>

      <BDForm onSubmit={handleSubmit}>
        <div className="mx-auto mt-20 flex max-w-2xl">
          <div className="w-full space-y-4">
            <h4 className="mb-10 w-full text-center text-xl font-semibold text-slate-900">
              Contact with blood donor
            </h4>

            <BDInput
              name="name"
              className="h-14 rounded-lg bg-slate-200"
              type="text"
              required
              placeholder="Name"
            />
            <BDInput
              name="number"
              className="h-14 rounded-lg bg-slate-200"
              type="number"
              placeholder="Mobile Number"
            />
            <BDInput
              name="hospitalName"
              className="h-14 rounded-lg bg-slate-200"
              type="text"
              placeholder="Hospital Name"
            />

            <BDDatePicker
              defaultValue={new Date("2025-02-12")}
              name="date"
              className="h-14 rounded-lg bg-slate-200"
              label="Select date"
              type="date"
              required
            />

            <BDTextarea
              name="message"
              rows={10}
              label="Message"
              required
              className="rounded-lg bg-slate-200"
            />
            <Button type="submit" className="h-16 w-full">
              Send Blood Request
            </Button>
          </div>
        </div>
      </BDForm>
    </section>
  );
};

export default withAuth(Profile);
