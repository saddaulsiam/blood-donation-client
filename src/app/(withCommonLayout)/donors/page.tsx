"use client";

import { useDonorsQuery } from "@/redux/features/donors/donorsApi";
import BloodDonorList from "../components/BloodDonorList";
import { useSearchParams } from "next/navigation";

const Donors = () => {
  const searchParams = useSearchParams();

  const bloodGroup = searchParams.get("bloodGroup");
  const date = searchParams.get("date");
  const reason = searchParams.get("reason");

  const { data } = useDonorsQuery({ bloodGroup, date, reason });
  return (
    <section className="">
      <BloodDonorList donors={data?.data} />
    </section>
  );
};

export default Donors;
