import React from "react";

const page = () => {
  return (
    <div>
      <BDInput
        className="h-14 max-w-2xl rounded-lg"
        type="number"
        name="age"
        label="Your Age"
        placeholder="Enter your age"
        required
      />
      <BDInput
        className="h-14 max-w-2xl rounded-lg"
        type="number"
        name="phone"
        placeholder="Enter your phone number"
        label="Phone Number"
        required
      />
      <BDSelect
        values={bloodGroups}
        className="h-14 w-full"
        label="Blood Group"
        placeholder="Select your blood group"
        name="bloodGroup"
        required
      />
      <BDSelect
        values={cities}
        className="h-14 w-full"
        label="City"
        placeholder="Select your city"
        name="reason"
        required
      />
      <BDDatePicker
        name="lastDonationDate"
        label="Last Blood Donation Date (Optional)"
        placeholder="Select last donation date"
        className="mb-5 h-14 max-w-2xl"
      />{" "}
    </div>
  );
};

export default page;


