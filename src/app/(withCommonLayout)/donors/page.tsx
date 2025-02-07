import { Suspense } from "react";
import DonorsContent from "../components/DonorsContent";
import SearchBloodDonors from "../components/SearchBloodDonors";

const Donors = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <div className="container mt-10">
      <SearchBloodDonors />
      <DonorsContent />
    </div>
  </Suspense>
);

export default Donors;
