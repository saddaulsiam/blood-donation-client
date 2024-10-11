import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
    Serial: "INV001",
    Location: "Paban",
    Date: "11-11-2000",
    MobileNo: "000000000",
    Status: "Done",
    Edit: "icon",
  },
];
const Dashboard = () => {
  return (
    <div className="">
      {/* wejet */}
      <div className="grid grid-cols-4 gap-3">
        <div className="h-40 w-full rounded-xl bg-slate-200"></div>
        <div className="h-40 w-full rounded-xl bg-slate-200"></div>
        <div className="h-40 w-full rounded-xl bg-slate-200"></div>
        <div className="h-40 w-full rounded-xl bg-slate-200"></div>
      </div>
      {/* All Blood Donation */}
      <div className="py-5">
        <h2 className="pb-5 text-2xl font-bold">All Blood Donation</h2>
        <Table>
          <TableCaption>All Blood Donar List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="flex-1">Serial</TableHead>
              <TableHead className="flex-1">Location</TableHead>
              <TableHead className="flex-1">Date</TableHead>
              <TableHead className="flex-1">Mobile No</TableHead>
              <TableHead className="flex-1">Status</TableHead>
              <TableHead className="flex-1">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.Serial}>
                <TableCell>{invoice.Serial}</TableCell>
                <TableCell>{invoice.Location}</TableCell>
                <TableCell>{invoice.Date}</TableCell>
                <TableCell>{invoice.MobileNo}</TableCell>
                <TableCell>{invoice.Status}</TableCell>
                <TableCell className="text-right">{invoice.Edit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell colSpan={4} className="text-right">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
