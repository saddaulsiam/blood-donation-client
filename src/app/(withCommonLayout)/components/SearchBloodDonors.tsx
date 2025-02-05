"use client";

import BDDatePicker from "@/components/forms/BDDatePicker";
import BDForm from "@/components/forms/BDForm";
import BDSelect from "@/components/forms/BDSelect";
import { Button } from "@/components/ui/button";
import { bloodGroups, cities } from "@/utils/data";
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
    <>
      <section className="container mt-10 rounded border bg-gray-50 pb-10 sm:mt-0">
        <h4 className="pb-10 pt-5 text-center text-2xl font-semibold text-gray-800">
          Search <span className="text-primary">Blood Donors</span>
        </h4>

        <BDForm onSubmit={onSubmit}>
          <div className="grid gap-5 px-5 sm:grid-cols-4">
            <BDSelect
              values={bloodGroups}
              className="h-14 w-full"
              label="Select Blood Group"
              name="bloodGroups"
              required
            />

            <BDSelect
              values={cities}
              className="h-14 w-full"
              label="Select Your City"
              name="reason"
              required
            />

            <BDDatePicker
              name="date"
              label="Select date"
              className="h-14 w-full"
              required
            />

            <Button className="h-14 px-[7.5rem]">Search</Button>
          </div>
        </BDForm>
      </section>

      {/*  <section className="container mt-10 rounded-lg border bg-white p-6 shadow-lg">
        <h4 className="pb-6 text-center text-3xl font-bold text-gray-800">
          Search <span className="text-red-500">Blood Donors</span>
        </h4>

        <BDForm onSubmit={onSubmit}>
          <div className="grid gap-5 sm:grid-cols-4">
            <BDSelect
              values={bloodGroups}
              className="w-full"
              label="Select Blood Group"
              name="bloodGroups"
              required
            />
            <BDSelect
              values={cities}
              className="w-full"
              label="Select Your City"
              name="reason"
              required
            />

            <BDDatePicker
              name="date"
              label="Select Date"
              className="w-full"
              required
            />
            <Button className="w-full bg-red-500 text-lg font-semibold hover:bg-red-600">
              🔍 Search Donors
            </Button>
          </div>
        </BDForm>
      </section> */}
    </>
  );
};

export default SearchBloodDonors;
