import { Suspense } from "react";
import DonorsContent from "../components/DonorsContent";
import SearchBloodDonors from "../components/SearchBloodDonors";
import Loading from "@/components/shared/Loading";

const Donors = () => (
  <Suspense fallback={<Loading />}>
    <div className="container my-10">
      <SearchBloodDonors />
      <DonorsContent />
    </div>
  </Suspense>
);

export default Donors;
