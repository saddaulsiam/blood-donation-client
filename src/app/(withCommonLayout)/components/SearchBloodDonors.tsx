"use client";

import BDDatePicker from "@/components/forms/BDDatePicker";
import BDForm from "@/components/forms/BDForm";
import BDSelect from "@/components/forms/BDSelect";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/variants";
import { bloodGroups, cities } from "@/utils/data";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

const SearchBloodDonors = () => {
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    router.push(
      `/donors?bloodGroup=${values.bloodGroups}&date=${values.date.split("T")[0]}&city=${values.city}`,
    );
  };
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="container mt-10 rounded border bg-gradient-to-br from-gray-50 to-gray-100 pb-10 sm:mt-0"
    >
      <h4 className="pb-10 pt-5 text-center text-2xl font-semibold text-gray-800">
        Search <span className="text-primary">Blood Donors</span>
      </h4>

      <BDForm onSubmit={onSubmit}>
        <div className="grid gap-5 px-5 sm:grid-cols-4">
          <BDSelect
            values={bloodGroups}
            className="h-14 w-full"
            placeholder="Select Blood Group"
            name="bloodGroups"
            required
          />

          <BDSelect
            values={cities}
            className="h-14 w-full"
            placeholder="Select Your City"
            name="city"
            required
          />

          <BDDatePicker
            name="date"
            placeholder="Select date"
            className="h-14 w-full"
            required
          />

          <Button
            type="submit"
            className="h-14 rounded-md px-[7.5rem] text-base font-medium"
          >
            Search
          </Button>
        </div>
      </BDForm>
    </motion.section>
  );
};

export default SearchBloodDonors;
