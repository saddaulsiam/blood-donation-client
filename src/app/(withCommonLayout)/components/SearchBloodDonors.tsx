"use client";

import BDDatePicker from "@/components/forms/BDDatePicker";
import BDForm from "@/components/forms/BDForm";
import BDSelect from "@/components/forms/BDSelect";
import { Button } from "@/components/ui/button";
import { bloodBagNumbers, bloodGroups, cities } from "@/utils/data";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

const SearchBloodDonors = () => {
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    router.push(
      `/donors?bloodGroup=${values.bloodGroups}&date=${values.date.split("T")[0]}&reason=${values.reason}`,
    );
  };
  return (
    <section className="container mt-10 rounded border pb-10 sm:mt-0">
      <h4 className="pb-10 pt-5 text-center text-2xl font-semibold text-[#101010]">
        Search Blood Donor&rsquo;s
      </h4>

      <BDForm onSubmit={onSubmit}>
        <div className="grid gap-5 px-5 sm:grid-cols-4">
          <BDSelect
            values={bloodGroups}
            className="h-16 w-full"
            label="Select Blood Group"
            name="bloodGroups"
            required
          />

          <BDSelect
            values={cities}
            className="h-16 w-full"
            label="Select Your City"
            name="reason"
            required
          />

          <BDDatePicker
            name="date"
            label="Select date"
            className="h-16 w-full"
            required
          />

          <Button className="h-16 px-[7.5rem]">Search</Button>
        </div>
      </BDForm>
    </section>
  );
};

export default SearchBloodDonors;
