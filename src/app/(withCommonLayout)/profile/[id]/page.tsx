"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [date, setDate] = useState<Date>();
  return (
    <section className="p-0">
      <div className="rounded-xl bg-slate-100 p-12">
        <div className="flex space-x-5">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="mb-3 text-2xl font-semibold text-slate-900">
              Donor profile details
            </h4>
            <p className="text-base font-medium text-slate-600">
              Name: Saddaul Siam
            </p>
            <p className="text-base font-medium text-slate-600">
              Bio: A regular blood donor
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-7">
          <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
            <h4 className="text-sm font-medium text-gray-500">Gender</h4>
            <p className="text-md font-semibold text-slate-700">Male</p>
          </div>
          <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
            <h4 className="text-sm font-medium text-gray-500">Age</h4>
            <p className="text-md font-semibold text-slate-700">20</p>
          </div>
          <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
            <h4 className="text-sm font-medium text-gray-500">Blood Type</h4>
            <p className="text-md font-semibold text-slate-700">A_POSITIVE</p>
          </div>
          <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
            <h4 className="text-sm font-medium text-gray-500">Last Donation</h4>
            <p className="text-md font-semibold text-slate-700">2024-03-25</p>
          </div>
          <div className="flex h-20 w-40 flex-col justify-center space-y-1.5 rounded-lg bg-slate-300 pl-5">
            <h4 className="text-sm font-medium text-gray-500">Availability</h4>
            <p className="text-md font-semibold text-slate-700">NO</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-2xl">
        <div className="w-full space-y-4">
          <h4 className="mb-10 w-full text-center text-xl font-semibold text-slate-900">
            Contact with blood donor
          </h4>

          <Input
            className="h-14 rounded-lg bg-slate-200"
            type="text"
            placeholder="Name"
          />
          <Input
            className="h-14 rounded-lg bg-slate-200"
            type="email"
            placeholder="Email"
          />
          <Input
            className="h-14 rounded-lg bg-slate-200"
            type="number"
            placeholder="Mobile Number"
          />
          <Popover>
            <PopoverTrigger asChild className="h-14 max-w-2xl bg-slate-200">
              <Button
                variant={"outline"}
                className={cn(
                  "m-0 h-14 w-full justify-start text-left font-normal",
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

          <Textarea
            rows={10}
            placeholder="Message"
            className="rounded-lg bg-slate-200"
          />
          <Button className="h-16 w-full">Send Blood Request</Button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
