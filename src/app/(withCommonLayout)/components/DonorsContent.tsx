"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDonorsQuery } from "@/redux/features/donors/donorsApi";
import { TUser } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const DonorsContent = () => {
  const searchParams = useSearchParams();

  const bloodGroup = searchParams.get("bloodGroup");
  const date = searchParams.get("date");
  const city = searchParams.get("city");

  const { data: donors } = useDonorsQuery({ bloodGroup, date, city });

  return (
    <section className="py-10">
      <h4 className="pb-10 text-center text-2xl font-semibold text-gray-800">
        Total donors found{" "}
        <span className="text-primary">{donors?.meta?.total}</span>
      </h4>

      <div className="grid grid-cols-4 gap-5">
        {donors?.data?.map((donor: TUser) => (
          <Link
            key={donor.id}
            href={`/profile/${donor.id}?bloodGroup=${bloodGroup}&date=${date}&city=${city}`}
          >
            <div className="h-full rounded-lg bg-white p-5 shadow transition-shadow duration-300 ease-in-out hover:shadow-lg">
              <div className="flex justify-center pb-6">
                <Avatar className="h-24 w-24 rounded-full border-[3px] border-primary shadow-lg">
                  <AvatarImage
                    src={donor.profile.photo || "/default-avatar.png"}
                    alt="@shadcn"
                    className="rounded-full"
                  />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
              </div>

              <div className="space-y-2 font-medium text-slate-700">
                <h4 className="text-xl font-semibold capitalize text-gray-800">
                  {donor?.name}
                </h4>
                <p className="text-base text-gray-600">
                  Last Donated:{" "}
                  <span className="font-medium text-gray-800">
                    {donor.profile.lastDonationDate}
                  </span>
                </p>
                <p className="text-base text-gray-600">
                  Availability:{" "}
                  <span
                    className={`font-medium ${donor.availability ? "text-green-500" : "text-red-500"}`}
                  >
                    {donor.availability ? "Yes" : "No"}
                  </span>
                </p>
                <p className="text-base text-gray-600">
                  Address:{" "}
                  <span className="font-medium text-gray-800">
                    {donor.city}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DonorsContent;
