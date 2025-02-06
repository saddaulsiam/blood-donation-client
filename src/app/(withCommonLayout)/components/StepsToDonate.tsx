import { FaHandHoldingHeart, FaHeartbeat, FaUserPlus } from "react-icons/fa";

const StepsToDonate = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h4 className="pb-14 text-center text-2xl font-semibold text-gray-800">
          <span className="text-primary">#</span> Steps to{" "}
          <span className="text-primary">Donate Blood</span>
        </h4>
        <div className="relative flex flex-col items-center space-y-16 sm:space-y-0">
          {/* Central Line */}
          <div className="absolute top-0 h-full w-0.5 -translate-x-1/2 transform bg-primary sm:left-1/2" />

          {/* Step 1 - Register */}
          <div className="relative z-10 flex w-72 flex-col items-center self-end md:w-96">
            <div className="relative flex transform flex-col items-center rounded-xl bg-gray-50 p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute -top-5 rounded-full bg-primary p-4 shadow-lg">
                <FaUserPlus className="text-4xl text-white" />
              </div>
              <h3 className="mb-4 mt-8 text-xl font-semibold text-gray-800">
                Step 1: Register as a Donor
              </h3>
              <ul className="space-y-2 text-left text-gray-500">
                <li className="list-inside list-disc">
                  Sign up by providing your basic details.
                </li>
                <li className="list-inside list-disc">
                  Share your medical history for eligibility screening.
                </li>
                <li className="list-inside list-disc">
                  Get approval and become a registered donor.
                </li>
              </ul>
            </div>

            {/* Line connecting Card 1 to central line */}
            <div className="absolute -left-[105px] top-1/2 hidden w-[13.3rem] -translate-x-1/2 transform rounded-md border border-primary sm:block" />
          </div>

          {/* Step 2 - Schedule Appointment */}
          <div className="relative z-10 flex w-72 flex-col items-center self-start md:w-96">
            <div className="relative flex transform flex-col items-center rounded-xl bg-gray-50 p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute -top-5 rounded-full bg-primary p-4 shadow-lg">
                <FaHeartbeat className="text-4xl text-white" />
              </div>
              <h3 className="mb-4 mt-8 text-xl font-semibold text-gray-800">
                Step 2: Schedule Your Donation
              </h3>
              <ul className="space-y-2 text-left text-gray-500">
                <li className="list-inside list-disc">
                  Pick a date and time that works for you.
                </li>
                <li className="list-inside list-disc">
                  Locate the nearest donation center or mobile unit.
                </li>
                <li className="list-inside list-disc">
                  Receive a confirmation and reminder for your appointment.
                </li>
              </ul>
            </div>

            {/* Line connecting Card 2 to central line */}
            <div className="absolute -right-[212px] top-1/2 hidden w-[13.3rem] -translate-y-1/2 transform rounded-md border border-primary sm:block" />
          </div>

          {/* Step 3 - Donate Blood */}
          <div className="relative flex w-72 flex-col items-center self-end md:w-96">
            <div className="relative flex transform flex-col items-center rounded-xl bg-gray-50 p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute -top-5 rounded-full bg-primary p-4 shadow-lg">
                <FaHandHoldingHeart className="text-4xl text-white" />
              </div>
              <h3 className="mb-4 mt-8 text-xl font-semibold text-gray-800">
                Step 3: Donate Blood
              </h3>
              <ul className="space-y-2 text-left text-gray-500">
                <li className="list-inside list-disc">
                  Complete a quick health check upon arrival.
                </li>
                <li className="list-inside list-disc">
                  Follow guidance from medical staff during donation.
                </li>
                <li className="list-inside list-disc">
                  Rest briefly after donation and enjoy refreshments.
                </li>
              </ul>
            </div>

            {/* Line connecting Card 3 to central line */}
            <div className="absolute -left-[105px] top-1/2 hidden w-[13.3rem] -translate-x-1/2 transform rounded-md border border-primary sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsToDonate;
