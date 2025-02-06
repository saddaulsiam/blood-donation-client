"use client";

import { useDonorsQuery } from "@/redux/features/donors/donorsApi";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import BloodDonorList from "../components/BloodDonorList";

const DonorsContent = () => {
  const searchParams = useSearchParams();

  const bloodGroup = searchParams.get("bloodGroup");
  const date = searchParams.get("date");
  const reason = searchParams.get("reason");

  const { data } = useDonorsQuery({ bloodGroup, date, reason });

  return (
    <section>
      <BloodDonorList donors={data?.data} />
    </section>
  );
};

const Donors = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <div className="container">
      <DonorsContent />
    </div>
  </Suspense>
);

export default Donors;
