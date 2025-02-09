"use client";

import withAuth from "@/hooks/withAuth";
import { useBloodRequestMutation } from "@/redux/features/request/requestApi";
import { useSingleDonorQuery } from "@/redux/features/donors/donorsApi";
import { useParams, useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import BloodDonationRequestForm from "../../components/BloodDonationRequestForm";
import DonarProfileDetails from "../../components/DonarProfileDetails";

const BloodRequest = () => {
  const router = useRouter();
  const { id } = useParams();

  const { data: donarInfo } = useSingleDonorQuery(id);
  const [bloodRequest] = useBloodRequestMutation();

  const handleSubmit = (values: FieldValues) => {
    const data = {
      donorId: donarInfo?.id,
      name: values.name,
      phoneNumber: values.number,
      dateOfDonation: values.date.split("T")[0],
      hospitalName: values.hospitalName,
      city: values.message,
    };
    try {
      bloodRequest(data).then((response) => {
        if (response.data.success) {
          toast.success("Request Submitted Successfully!");
          router.push("/request-to-donate");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mx-auto max-w-3xl p-4 md:p-8">
      {/* Donor Profile Section */}
      <DonarProfileDetails donarInfo={donarInfo} />

      {/* Request Form */}
      <div className="rounded-md border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
        <BloodDonationRequestForm handleSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default withAuth(BloodRequest);
