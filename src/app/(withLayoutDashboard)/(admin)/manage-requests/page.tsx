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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  useCompleatRemainderMutation,
  useGetRequestsQuery,
  useUpdateRequestMutation,
} from "@/redux/features/request/requestApi";
import { TRequest } from "@/types/request";
import { Bell, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const ManageRequests = () => {
  const toastId = useRef<string | number | null>(null);
  const [selectedValue, setSelectedValue] = useState("");

  const { data: requests } = useGetRequestsQuery(
    { status: selectedValue },
    {
      pollingInterval: 60000,
    },
  );
  const [updateRequest, { isLoading }] = useUpdateRequestMutation();
  const [remainder, { isLoading: isRemain }] = useCompleatRemainderMutation();

  const handleStatusUpdate = (status: string, id: string) => {
    const confirmed = confirm("Are you sure !!");
    if (confirmed) {
      updateRequest({ id, status });
    }
  };

  const handelRemainder = async (id: string) => {
    const res = await remainder({ id }).unwrap();
    if (res.success) {
      toast.success(res.message);
    }
  };

  useEffect(() => {
    if (isLoading || isRemain) {
      if (!toastId.current) {
        toastId.current = toast.loading("Processing...");
      }
    } else {
      if (toastId.current) {
        toast.dismiss(toastId.current);
        toastId.current = null;
      }
    }
  }, [isLoading, isRemain]);

  return (
    <div className="min-h-screen rounded-md bg-gray-50 p-2 sm:p-6">
      <h2 className="pb-10 pt-2 text-lg font-semibold text-gray-800 sm:text-3xl">
        All Blood Donation Requests
      </h2>
      <RadioGroup
        value={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
        className="flex pb-5"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="" id="r1" />
          <Label htmlFor="r1">All</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="CANCEL" id="r3" />
          <Label htmlFor="r3">Cancel</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="PENDING" id="r2" />
          <Label htmlFor="r2">Pending</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="APPROVED" id="r4" />
          <Label htmlFor="r4">Approved</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="SUCCESSFUL" id="r5" />
          <Label htmlFor="r5">Successful</Label>
        </div>
      </RadioGroup>
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Donor Name</TableHead>
              <TableHead>Donor Number</TableHead>
              <TableHead>Requester Name</TableHead>
              <TableHead>Requester Number</TableHead>
              <TableHead>Date of Donation</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Hospital Name</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests?.data
              ?.map((request: TRequest) => (
                <TableRow key={request.id} className="hover:bg-gray-50">
                  <TableCell>{request?.donor?.name}</TableCell>
                  <TableCell>{request?.donor?.phoneNumber}</TableCell>
                  <TableCell>{request?.requester?.name}</TableCell>
                  <TableCell>{request?.requester?.phoneNumber}</TableCell>
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
                  <TableCell>{request?.city}</TableCell>
                  <TableCell>{request?.hospitalName}</TableCell>
                  <TableCell>
                    {request?.message.slice(0, 20)}

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant={"link"}>View more</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="mb-2">My Message</DialogTitle>
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
                  <TableCell>
                    {request.status === Status.PENDING ? (
                      <Button
                        variant="link"
                        onClick={() =>
                          handleStatusUpdate(Status.REJECTED, request.id)
                        }
                      >
                        Reject Now
                      </Button>
                    ) : request.status === Status.APPROVED ? (
                      new Date(request.dateOfDonation) < new Date() ? (
                        request.isComplete ? (
                          <>
                            <p className="flex items-center text-green-500">
                              <CheckCircle className="mr-1" /> Remainder send
                            </p>
                            <Button
                              variant="link"
                              className="m-0 p-0"
                              onClick={() => handelRemainder(request.id)}
                            >
                              <Bell /> Remainder Again
                            </Button>
                          </>
                        ) : (
                          <Button
                            className="bg-green-500 shadow-md hover:bg-green-600"
                            onClick={() => handelRemainder(request.id)}
                          >
                            <Bell /> it&apos;s Complete?
                          </Button>
                        )
                      ) : (
                        <p className="text-blue-800">Donor Just Approved</p>
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
                            : request.status === Status.REJECTED
                              ? "Admin Rejected Request"
                              : "Something went wrong"}
                      </span>
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

export default withAuth(ManageRequests);
