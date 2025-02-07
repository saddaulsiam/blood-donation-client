import BDDatePicker from "@/components/forms/BDDatePicker";
import BDForm from "@/components/forms/BDForm";
import BDInput from "@/components/forms/BDInput";
import BDTextarea from "@/components/forms/BDTextarea";
import { Button } from "@/components/ui/button";
import { FiDroplet } from "react-icons/fi";

const BloodDonationRequestForm = ({ handleSubmit }: any) => {
      return (
    <BDForm onSubmit={handleSubmit}>
      <div className="space-y-6">
        <h2 className="pb-3 text-center text-2xl font-semibold text-gray-800">
          Request Blood Donation
        </h2>

        <div className="space-y-3">
          <BDInput
            name="name"
            label="Your Full Name"
            placeholder="John Doe"
            required
          />
          <BDInput
            name="number"
            label="Contact Number"
            placeholder="+1 234 567 890"
            type="tel"
            required
          />
          <BDInput
            name="hospitalName"
            label="Hospital Name"
            placeholder="City General Hospital"
            required
          />
          <BDDatePicker
            name="date"
            label="Required Donation Date"
            placeholder="Select a date"
            required
          />
          <BDTextarea
            name="message"
            label="Reason for Request"
            rows={4}
            placeholder="Please explain why you need this blood donation..."
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full gap-2 bg-primary text-lg hover:bg-primary-dark"
          size="lg"
        >
          <FiDroplet />
          Send Request
        </Button>
      </div>
    </BDForm>
  );
};

export default BloodDonationRequestForm;
