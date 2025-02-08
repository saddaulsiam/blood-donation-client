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
import {
  useGetRequestToDonateQuery,
  useUpdateRequestMutation,
} from "@/redux/features/request/requestApi";
import { Status } from "@/types";

const RequestToDonate = () => {
  const { data: requests } = useGetRequestToDonateQuery(undefined);
  const [updateRequest] = useUpdateRequestMutation();

  const handleStatusUpdate = (status: string, id: string) => {
    const confirmed = confirm("Are you sure !!");
    if (confirmed) {
      updateRequest({ id, status });
    }
  };
  return (
    <div className="min-h-screen rounded-md bg-gray-50 p-6">
      <h2 className="pb-10 text-lg font-semibold text-gray-800 sm:text-3xl">
        I Request To Donate Blood
      </h2>
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Donar Name</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Date of Donation</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Hospital Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests?.data
              ?.map((request: any) => (
                <TableRow key={request.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{request.id}</TableCell>
                  <TableCell>{request.name}</TableCell>
                  <TableCell>{request.phoneNumber}</TableCell>
                  <TableCell>{request.dateOfDonation}</TableCell>
                  <TableCell>{request.city}</TableCell>
                  <TableCell>{request.hospitalName}</TableCell>
                  <TableCell>
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        request.status === Status.PENDING
                          ? "bg-yellow-100 text-yellow-800"
                          : request.status === Status.APPROVED
                            ? "bg-blue-100 text-blue-800"
                            : request.status === Status.SUCCESSFUL
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {request.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {request.status === Status.PENDING ? (
                      <Button
                        variant="link"
                        onClick={() =>
                          handleStatusUpdate(Status.CANCEL, request.id)
                        }
                      >
                        Cancel Now
                      </Button>
                    ) : request.status === Status.SUCCESSFUL ? (
                      <span className="text-green-500">
                        ✔ Donation Complete
                      </span>
                    ) : request.status === Status.CANCEL ? (
                      <span className="text-red-500">Request Canceled ❌</span>
                    ) : request.status === Status.APPROVED ? (
                      <span className="text-blue-800">
                        Donor Approved Request
                      </span>
                    ) : (
                      <span className="text-red-500">Something went wrong</span>
                    )}
                  </TableCell>
                </TableRow>
              ))
              .toReversed()}
          </TableBody>
        </Table>
        {requests?.data?.length === 0 && (
          <p className="p-10 text-center text-xl font-semibold text-gray-500">
            No Requests Found
          </p>
        )}
      </div>
    </div>
  );
};

export default RequestToDonate;
