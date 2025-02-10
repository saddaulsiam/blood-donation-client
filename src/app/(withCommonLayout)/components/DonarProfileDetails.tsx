import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TUser } from "@/types";
import Link from "next/link";
import { FiDroplet, FiEdit2 } from "react-icons/fi";

const DonarProfileDetails = ({
  donarInfo,
  edit,
}: {
  donarInfo: TUser | undefined;
  edit?: boolean;
}) => {
  return (
    <div className="relative mb-8 rounded-md border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
      {/* Edit Button */}
      {edit && (
        <Link href={`/profile/update/${donarInfo?.id}`}>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-4 flex items-center gap-2"
          >
            <FiEdit2 /> Edit
          </Button>
        </Link>
      )}

      <div className="mb-8 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <Avatar className="h-20 w-20 border-[3px] border-primary">
          <AvatarImage
            src={donarInfo?.profile?.photo || "/default-avatar.png"}
          />
          <AvatarFallback className="bg-primary/10 text-primary">
            {donarInfo?.name?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold capitalize text-gray-800">
            {donarInfo?.name}
          </h1>
          <p className="mt-2 text-gray-600">
            {donarInfo?.profile?.bio || "Bio not available"}
          </p>
          <Badge
            variant={donarInfo?.availability ? "default" : "outline"}
            className="mt-4"
          >
            <FiDroplet className="mr-2" />
            {donarInfo?.availability
              ? "Available to donate"
              : "Currently unavailable"}
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Blood Group"
          value={donarInfo?.bloodGroup
            ?.replace("_POSITIVE", "+")
            .replace("_NEGATIVE", "-")}
        />
        <StatCard label="Age" value={donarInfo?.profile?.age} />
        <StatCard
          label="Gender"
          value={donarInfo?.gender ? donarInfo?.gender : "N/A"}
        />
        <StatCard
          label="Last Donation"
          value={
            donarInfo?.profile?.lastDonationDate
              ? new Date(
                  donarInfo?.profile?.lastDonationDate,
                ).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "N/A"
          }
        />
      </div>
    </div>
  );
};

const StatCard = ({
  label,
  value,
}: {
  label: string;
  value: string | number | undefined;
}) => (
  <div className="rounded-lg border bg-gray-50 p-4 text-center">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="mt-1 text-lg font-semibold text-gray-900">{value || "-"}</p>
  </div>
);

export default DonarProfileDetails;
