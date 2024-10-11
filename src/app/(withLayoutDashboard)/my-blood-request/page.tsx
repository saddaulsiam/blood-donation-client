import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
];

const MyBloodRequest = () => {
  return (
    <div>
      {/* Requests */}
      <h2 className="pb-5 text-2xl font-bold text-gray-700">
        All Blood Donation Requests
      </h2>
      <div className="space-y-5">
        <div className="h-40 w-full rounded-lg bg-slate-100 p-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="flex-1">Invoice</TableHead>
                <TableHead>Requester Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead className="flex-1">Data of Donation</TableHead>
                <TableHead className="flex-1">Hospital name</TableHead>
                <TableHead className="flex-1">Hospital Address</TableHead>
                <TableHead className="flex-1">Status</TableHead>
                <TableHead className="flex-1">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>id-11111</TableCell>
                <TableCell>Saddaul Siam</TableCell>
                <TableCell>01311333277</TableCell>
                <TableCell>11-11-2020</TableCell>
                <TableCell>City Hospital</TableCell>
                <TableCell>Pabna Sodar</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="h-40 w-full rounded-lg bg-slate-100 p-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="flex-1">Invoice</TableHead>
                <TableHead>Requester Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead className="flex-1">Data of Donation</TableHead>
                <TableHead className="flex-1">Hospital name</TableHead>
                <TableHead className="flex-1">Hospital Address</TableHead>
                <TableHead className="flex-1">Status</TableHead>
                <TableHead className="flex-1">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>id-11111</TableCell>
                <TableCell>Saddaul Siam</TableCell>
                <TableCell>01311333277</TableCell>
                <TableCell>11-11-2020</TableCell>
                <TableCell>City Hospital</TableCell>
                <TableCell>Pabna Sodar</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="h-40 w-full rounded-lg bg-slate-100 p-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="flex-1">Invoice</TableHead>
                <TableHead>Requester Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead className="flex-1">Data of Donation</TableHead>
                <TableHead className="flex-1">Hospital name</TableHead>
                <TableHead className="flex-1">Hospital Address</TableHead>
                <TableHead className="flex-1">Status</TableHead>
                <TableHead className="flex-1">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>id-11111</TableCell>
                <TableCell>Saddaul Siam</TableCell>
                <TableCell>01311333277</TableCell>
                <TableCell>11-11-2020</TableCell>
                <TableCell>City Hospital</TableCell>
                <TableCell>Pabna Sodar</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyBloodRequest;
