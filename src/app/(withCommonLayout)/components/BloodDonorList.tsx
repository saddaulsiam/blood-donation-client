import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TUser } from "@/types/user";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface BloodDonorListProps {
  donors: TUser[];
}

const BloodDonorList = ({ donors }: BloodDonorListProps) => {
  const searchParams = useSearchParams();

  const bloodGroup = searchParams.get("bloodGroup");
  const date = searchParams.get("date");
  const city = searchParams.get("city");

  return (
    <>
      <div className="text-center">
        <h4 className="text-2xl font-bold text-[#101010]">
          Total donors found 82.
        </h4>
        <p className="pt-3 leading-6 text-slate-600">
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Ratione, optio!
        </p>
      </div>

      <div className="mt-14 grid grid-cols-4 gap-5">
        {donors?.map((donor) => (
          <Link
            key={donor.id}
            href={`/profile/${donor.id}?bloodGroup=${bloodGroup}&date=${date}&city=${city}`}
          >
            <div className="rounded-lg bg-slate-100 p-7">
              <div className="flex justify-center pb-5">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-700">
                  {donor?.name}
                </h4>
                <p className="font-medium text-slate-600">
                  Last Donet: {donor.profile.lastDonationDate}
                </p>
                <p className="font-medium text-slate-600">
                  Address: {donor.city}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BloodDonorList;
