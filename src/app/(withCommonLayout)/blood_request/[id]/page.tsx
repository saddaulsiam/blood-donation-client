"use client";

import withAuth from "@/hooks/withAuth";
import { useSingleDonorQuery } from "@/redux/features/donors/donorsApi";
import { useBloodRequestMutation } from "@/redux/features/request/requestApi";
import { useParams, useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import BloodDonationRequestForm from "../../components/BloodDonationRequestForm";
import DonarProfileDetails from "../../components/DonarProfileDetails";

const BloodRequest = () => {
  const router = useRouter();
  const { id } = useParams();

  const { data: donarInfo } = useSingleDonorQuery(id);
  const [bloodRequest, { isLoading }] = useBloodRequestMutation();

  const handleSubmit = async (values: FieldValues) => {
    const data = {
      donorId: donarInfo?.id,
      name: values.name,
      phoneNumber: values.number,
      dateOfDonation: values.date.split("T")[0],
      hospitalName: values.hospitalName,
      city: donarInfo?.city,
      message: values.message,
    };

    try {
      const result = await bloodRequest(data).unwrap();
      if (result?.success === true) {
        toast.success(result?.message);
        router.push("/request-to-donate");
      }
      console.log({ result });
    } catch (error: any) {
      console.log({ error });
      error?.data?.errorSources?.map((err: any) => toast.error(err?.message));
    }
  };

  return (
    <section className="mx-auto max-w-5xl p-4 md:p-8">
      {/* Donor Profile Section */}
      <DonarProfileDetails donarInfo={donarInfo} />

      {/* Request Form */}
      <div className="mx-auto max-w-5xl rounded-md border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
        <BloodDonationRequestForm
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};

export default withAuth(BloodRequest);
