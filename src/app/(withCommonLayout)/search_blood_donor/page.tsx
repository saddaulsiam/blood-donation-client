import BloodDonorList from "../components/BloodDonorList";
import SearchBloodDonorCom from "../components/SearchBloodDonorCom";

const SearchBloodDonorPage = () => {
  return (
    <section className="py-14">
      <SearchBloodDonorCom />
      <BloodDonorList />
    </section>
  );
};

export default SearchBloodDonorPage;
