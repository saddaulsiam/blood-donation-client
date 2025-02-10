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

  const { data: donors, isLoading } = useDonorsQuery(
    {
      bloodGroup,
      date,
      city,
    },
    {
      pollingInterval: 5000,
    },
  );

  return (
    <section className="py-10">
      {isLoading ? (
        <div className="mx-auto mb-10 h-8 w-64 animate-pulse rounded bg-gray-300"></div>
      ) : donors?.data.length > 0 ? (
        <h4 className="pb-10 text-center text-2xl font-semibold text-gray-800">
          We found <span className="text-primary">{donors?.meta?.total}</span>{" "}
          donors ready to help!
        </h4>
      ) : (
        <div className="flex h-40 flex-col items-center justify-center rounded-lg p-6 text-center">
          <p className="text-xl font-semibold text-gray-700">No donors found</p>
          <p className="text-base text-gray-500">
            Try adjusting your search criteria.
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-full animate-pulse rounded-lg bg-gray-200 p-5 shadow"
              >
                <div className="flex justify-center pb-6">
                  <div className="h-24 w-24 rounded-full bg-gray-300"></div>
                </div>
                <div className="space-y-2 font-medium text-slate-700">
                  <div className="h-6 w-3/4 rounded bg-gray-300"></div>
                  <div className="h-4 w-1/2 rounded bg-gray-300"></div>
                  <div className="h-4 w-2/3 rounded bg-gray-300"></div>
                  <div className="h-4 w-1/3 rounded bg-gray-300"></div>
                </div>
              </div>
            ))
          : donors?.data?.map((donor: TUser) => (
              <Link
                key={donor.id}
                href={`/blood_request/${donor.id}?bloodGroup=${bloodGroup}&date=${date}&city=${city}`}
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
