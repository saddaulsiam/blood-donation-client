"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Status } from "@/contants/common";
import {
  useChangeDonorStatusMutation,
  useGetDonorsQuery,
} from "@/redux/features/donors/donorsApi";
import { TUser } from "@/types/user";
import { CgUnblock } from "react-icons/cg";
import { MdDeleteForever, MdOutlineBlock } from "react-icons/md";

const ManageDonors = () => {
  const { data: donors } = useGetDonorsQuery({});
  const [changeStatus, { isLoading }] = useChangeDonorStatusMutation();

  const handleStatusUpdate = (status: string, email: string) => {
    const confirmed = confirm("Are you sure !!");
    if (confirmed) {
      changeStatus({ email, status });
    }
  };
  return (
    <div className="min-h-screen rounded-md bg-gray-50 p-2 sm:p-6">
      <h2 className="pb-10 pt-2 text-lg font-semibold text-gray-800 sm:text-3xl">
        Manage All Donors
      </h2>
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Blood Group</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Last Donation</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {donors?.data
              ?.map((donor: TUser) => (
                <TableRow key={donor.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    {`${donor.id.slice(0, 5)}...${donor.id.slice(-5)}`}
                  </TableCell>
                  <TableCell>{donor.name}</TableCell>
                  <TableCell>{donor.phoneNumber}</TableCell>
                  <TableCell>{donor.email}</TableCell>
                  <TableCell>{donor.profile.age}</TableCell>
                  <TableCell>{donor.bloodGroup}</TableCell>
                  <TableCell>{donor.gender}</TableCell>
                  <TableCell>{donor.city}</TableCell>
                  <TableCell>
                    {donor?.profile?.lastDonationDate
                      ? new Date(
                          donor?.profile?.lastDonationDate,
                        ).toLocaleDateString("en-bn", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "N/A"}
                  </TableCell>
                  <TableCell>{donor.availability ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        donor.status === Status.INACTIVE
                          ? "bg-yellow-100 text-yellow-800"
                          : donor.status === Status.ACTIVE
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {donor.status}
                    </span>
                  </TableCell>
                  <TableCell className="flex flex-wrap justify-end gap-2">
                    <TableCell className="flex flex-wrap justify-end gap-2">
                      {donor.status === Status.INACTIVE ? (
                        <Button
                          onClick={() =>
                            handleStatusUpdate(Status.DELETED, donor.email)
                          }
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <span className="h-5 w-5 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></span>
                              <span className="text-blue-500">
                                Processing...
                              </span>
                            </div>
                          ) : (
                            <>
                              <MdDeleteForever />
                              Delete
                            </>
                          )}
                        </Button>
                      ) : donor.status === Status.BLOCKED ? (
                        <Button
                          onClick={() =>
                            handleStatusUpdate(Status.ACTIVE, donor.email)
                          }
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <span className="h-5 w-5 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></span>
                              <span className="text-blue-500">
                                Processing...
                              </span>
                            </div>
                          ) : (
                            <>
                              <CgUnblock />
                              Unblock
                            </>
                          )}
                        </Button>
                      ) : (
                        <Button
                          onClick={() =>
                            handleStatusUpdate(Status.BLOCKED, donor.email)
                          }
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <span className="h-5 w-5 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></span>
                              <span className="text-blue-500">
                                Processing...
                              </span>
                            </div>
                          ) : (
                            <>
                              <MdOutlineBlock />
                              Block
                            </>
                          )}
                        </Button>
                      )}
                    </TableCell>
                  </TableCell>
                </TableRow>
              ))
              .toReversed()}
          </TableBody>
        </Table>
        {donors?.data?.length === 0 && (
          <p className="p-10 text-center text-xl font-semibold text-gray-500">
            No Requests Found
          </p>
        )}
      </div>
    </div>
  );
};

export default ManageDonors;
