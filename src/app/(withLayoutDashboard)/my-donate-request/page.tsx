"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SelectSeparator } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Status } from "@/contants/common";
import withAuth from "@/hooks/withAuth";
import {
  useGetMyRequestQuery,
  useUpdateRequestMutation,
} from "@/redux/features/request/requestApi";
import { TRequest } from "@/types/request";
import { Check, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

const MyBloodRequest = () => {
  const toastId = useRef<string | number | null>(null);

  const { data: requests } = useGetMyRequestQuery(undefined, {
    pollingInterval: 60000,
  });
  const [updateRequest, { isLoading }] = useUpdateRequestMutation();

  const handleStatusUpdate = async (status: string, id: string) => {
    const confirmed = confirm("Are you sure !!");
    if (confirmed) {
      const res = await updateRequest({ id, status }).unwrap();
      if (res.success) {
        toast.success("Update Successful");
      }
    }
  };

  useEffect(() => {
    if (isLoading) {
      if (!toastId.current) {
        toastId.current = toast.loading("Processing...");
      }
    } else {
      if (toastId.current) {
        toast.dismiss(toastId.current);
        toastId.current = null;
      }
    }
  }, [isLoading]);
  return (
    <div className="min-h-screen rounded-md bg-gray-50 p-2 sm:p-6">
      <h2 className="pb-10 pt-2 text-lg font-semibold text-gray-800 sm:text-3xl">
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
              <TableHead>Message</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {requests?.data
              ?.map((request: TRequest) => (
                <TableRow key={request.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    {`${request.id.slice(0, 5)}...${request.id.slice(-5)}`}
                  </TableCell>
                  <TableCell>{request.name}</TableCell>
                  <TableCell>{request.phoneNumber}</TableCell>
                  <TableCell>
                    {new Date(request.dateOfDonation).toLocaleDateString(
                      "en-bn",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      },
                    )}
                  </TableCell>
                  <TableCell>{request.city}</TableCell>
                  <TableCell>{request.hospitalName}</TableCell>
                  <TableCell>
                    {request.message.slice(0, 30)}

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant={"link"}>View more</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="mb-2">
                            Requester Message
                          </DialogTitle>
                          <SelectSeparator />
                          <DialogDescription className="text-base text-gray-600">
                            {request.message}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
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
                  <TableCell className="flex flex-wrap justify-end gap-2">
                    <TableCell className="flex flex-wrap justify-end gap-2">
                      {request.status === Status.PENDING ? (
                        <>
                          <Button
                            onClick={() =>
                              handleStatusUpdate(Status.APPROVED, request.id)
                            }
                            className="flex items-center gap-1 bg-green-500 text-white hover:bg-green-600"
                          >
                            <Check size={16} /> Approve
                          </Button>
                          <Button
                            onClick={() =>
                              handleStatusUpdate(Status.CANCEL, request.id)
                            }
                            className="flex items-center gap-1 bg-red-500 text-white hover:bg-red-600"
                          >
                            <X size={16} /> Cancel
                          </Button>
                        </>
                      ) : request.status === Status.APPROVED ? (
                        request.isComplete ? (
                          <>
                            <Button
                              onClick={() =>
                                handleStatusUpdate(
                                  Status.SUCCESSFUL,
                                  request.id,
                                )
                              }
                              className="flex items-center gap-1 bg-green-500 text-white hover:bg-green-600"
                            >
                              <Check size={16} /> Complete
                            </Button>
                            <Button
                              onClick={() =>
                                handleStatusUpdate(Status.CANCEL, request.id)
                              }
                              className="flex items-center gap-1 bg-red-500 text-white hover:bg-red-600"
                            >
                              <X size={16} /> Cancel
                            </Button>
                          </>
                        ) : (
                          <span className="text-blue-500">
                            Your Approved Request
                          </span>
                        )
                      ) : (
                        <span
                          className={
                            request.status === Status.SUCCESSFUL
                              ? "text-green-500"
                              : "text-red-500"
                          }
                        >
                          {request.status === Status.SUCCESSFUL
                            ? "✔ Donation Complete"
                            : request.status === Status.CANCEL
                              ? "Canceled Request ❌"
                              : "Something went wrong"}
                        </span>
                      )}
                    </TableCell>
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

export default withAuth(MyBloodRequest);
