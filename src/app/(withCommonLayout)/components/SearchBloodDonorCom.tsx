"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import BDForm from "@/components/forms/BDForm";
import BDSelect from "@/components/forms/BDSelect";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { bloodBagNumbers, bloodGroups, cities } from "@/utils/data";
import { FieldValues } from "react-hook-form";

const SearchBloodDonorCom = () => {
  const [date, setDate] = useState<Date>();

  const onSubmit = async (values: FieldValues) => {};

  return (
    <>
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
            bloodGroups={bloodGroups}
            className="h-16 w-full"
            label="Select Blood Group"
            name="bloodGroups"
            required
          />

          <Popover>
            <PopoverTrigger asChild className="h-16 w-full">
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>

          <Select>
            <SelectTrigger className="h-16 w-full">
              <SelectValue placeholder="Select Your Area" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Available Area</SelectLabel>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-16 w-full">
              <SelectValue placeholder="Number of Bag Blood" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Number of Bag Blood</SelectLabel>
                {bloodBagNumbers.map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button className="h-16 px-[7.5rem]">Search</Button>
        </div>
      </BDForm>
    </>
  );
};

export default SearchBloodDonorCom;
