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
    <section>
      <div className="text-center">
        <h4 className="text-2xl font-bold text-[#101010]">
          Search Blood Donor
        </h4>
        <p className="pt-3 leading-6 text-slate-600">
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Ratione, optio!
        </p>
      </div>

      <BDForm onSubmit={onSubmit}>
        <div className="grid grid-cols-5 gap-x-5 pt-16">
          <BDSelect
            values={bloodGroups}
            className="h-16 w-full"
            label="Select Blood Group"
            name="bloodGroups"
            required
          />

          <BDDatePicker
            name="date"
            label="Select date"
            className="h-16 w-full"
            required
          />

          <BDSelect
            values={cities}
            className="h-16 w-full"
            label="Select Your City"
            name="reason"
            required
          />
          <BDSelect
            values={bloodBagNumbers}
            className="h-16 w-full"
            label="Select Your Area"
            name="area"
            required
          />

          <Button className="h-16 px-[7.5rem]">Search</Button>
        </div>
      </BDForm>
    </section>
  );
};

export default SearchBloodDonors;
