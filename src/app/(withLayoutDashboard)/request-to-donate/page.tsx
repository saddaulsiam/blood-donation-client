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
import { useGetRequestToDonateQuery } from "@/redux/features/request/requestApi";

const RequestToDonate = () => {
  const { data: requests } = useGetRequestToDonateQuery(undefined);
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
            {requests?.data.map((request: any) => (
              <TableRow key={request.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.phoneNumber}</TableCell>
                <TableCell>{request.dateOfDonation}</TableCell>
                <TableCell>{request.reason}</TableCell>
                <TableCell>{request.hospitalName}</TableCell>
                <TableCell>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      request.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : ["APPROVED", "SUCCESSFUL", "DONE"].includes(
                              request.status,
                            )
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {request.status}
                  </span>
                </TableCell>
                <TableCell>
                  {request.status === "PENDING" ? (
                    <Button variant="link">Cancel</Button>
                  ) : request.status === "SUCCESSFUL" ? (
                    <span className="text-green-500">✔ Donation Complete</span>
                  ) : request.status === "REJECTED" ? (
                    <span className="text-red-500">
                      ✖ Donar Cancel Required
                    </span>
                  ) : request.status === "APPROVED" ? (
                    <>
                      <span className="text-green-500">
                        Donar approved request
                      </span>
                      {/* <Button variant="link">Cancel</Button> */}
                    </>
                  ) : (
                    ""
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RequestToDonate;
