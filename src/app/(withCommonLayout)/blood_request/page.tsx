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

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const BloodRequest = () => {
  const [date, setDate] = useState<Date>();
  return (
    <section className="flex h-[800px] flex-col items-center justify-center">
      <h4 className="text-3xl font-bold text-slate-800">Blood Request </h4>
      <p className="pt-2 text-base font-normal leading-7 text-slate-600">
        Lorem ipsum dolor sit amet consectetur,
      </p>

      <div className="mt-14 space-y-3">
        <Select>
          <SelectTrigger className="h-14 max-w-2xl bg-slate-200">
            <SelectValue placeholder="Select Blood Group" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Blood Group</SelectLabel>
              <SelectItem value="A_POSITIVE">A_POSITIVE</SelectItem>
              <SelectItem value="A_NEGATIVE">A_NEGATIVE</SelectItem>
              <SelectItem value="B_POSITIVE">B_POSITIVE</SelectItem>
              <SelectItem value="B_NEGATIVE">B_NEGATIVE</SelectItem>
              <SelectItem value="AB_POSITIVE">AB_POSITIVE</SelectItem>
              <SelectItem value="AB_NEGATIVE">AB_NEGATIVE</SelectItem>
              <SelectItem value="O_POSITIVE">O_POSITIVE</SelectItem>
              <SelectItem value="O_NEGATIVE">O_NEGATIVE</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          className="h-14 max-w-2xl rounded-lg bg-slate-200"
          type="number"
          placeholder="Number of Bag"
        />

        <Popover>
          <PopoverTrigger asChild className="h-14 max-w-2xl bg-slate-200">
            <Button
              variant={"outline"}
              className={cn(
                "h-14 w-full justify-start m-0 text-left font-normal",
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

        <Input
          className="h-14 max-w-2xl rounded-lg bg-slate-200"
          type="number"
          placeholder="Extra Contact No"
        />

        <Textarea
          rows={10}
          placeholder="Why blood is need?"
          className="max-w-2xl rounded-lg bg-slate-200"
        />

        <Button className="h-16 min-w-[42rem]">Send Blood Request</Button>
      </div>
    </section>
  );
};

export default BloodRequest;
