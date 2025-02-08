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
import { useGetMyRequestQuery } from "@/redux/features/request/requestApi";
import { Check, X } from "lucide-react";

const MyBloodRequest = () => {
  const { data: requests } = useGetMyRequestQuery(undefined);
  return (
    <div className="min-h-screen rounded-md bg-gray-50 p-6">
      <h2 className="pb-10 text-lg font-semibold text-gray-800 sm:text-3xl">
        My Blood Donation Requests
      </h2>
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Requester Name</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Date of Donation</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Hospital Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
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
                <TableCell className="flex flex-wrap justify-end gap-2">
                  <TableCell className="flex flex-wrap justify-end gap-2">
                    {request.status === "PENDING" ? (
                      <>
                        <Button className="flex items-center gap-1 bg-green-500 text-white hover:bg-green-600">
                          <Check size={16} /> Approve
                        </Button>
                        <Button className="flex items-center gap-1 bg-red-500 text-white hover:bg-red-600">
                          <X size={16} /> Reject
                        </Button>
                      </>
                    ) : (
                      <span
                        className={`font-medium ${request.status === "REJECTED" ? "text-red-600" : "text-green-600"}`}
                      >
                        {request.status === "REJECTED"
                          ? "✖ Rejected"
                          : `✔ ${request.status}`}
                      </span>
                    )}
                  </TableCell>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyBloodRequest;
