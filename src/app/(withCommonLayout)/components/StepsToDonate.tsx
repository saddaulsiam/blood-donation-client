"use client";

import { fadeIn } from "@/lib/variants";
import { useAppSelector } from "@/redux/hooks";
import { motion } from "motion/react";
import Link from "next/link";
import { FaHandHoldingHeart, FaHeartbeat, FaUserPlus } from "react-icons/fa";

const StepsToDonate = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <section className="container py-20">
      <h4 className="pb-14 text-center text-2xl font-semibold text-gray-800">
        <span className="text-primary">#</span> Steps to{" "}
        <span className="text-primary">Donate Blood</span>
      </h4>

      <div className="relative flex flex-col items-center space-y-16 sm:space-y-0">
        {/* Central Line */}
        <div className="absolute top-0 h-full w-0.5 -translate-x-1/2 transform bg-primary sm:left-1/2" />

        {/* Step 1 - Register */}
        <div className="relative z-10 flex w-96 flex-col items-center self-end">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="relative flex transform flex-col items-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-lg transition-all hover:shadow-xl"
          >
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
                <Link
                  href={`/profile/update/${user?.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Update your profile
                </Link>{" "}
                to keep your donor information accurate.
              </li>
              <li className="list-inside list-disc">
                Update your availability status to let others know you’re ready
                to donate.
              </li>
            </ul>
          </motion.div>

          {/* Line connecting Card 1 to central line */}
          <div className="absolute -left-[110px] top-1/2 hidden w-[13.8rem] -translate-x-1/2 transform rounded-md border border-primary sm:block" />
        </div>

        {/* Step 2 - Schedule Appointment */}
        <div className="relative z-10 flex w-96 flex-col items-center self-start">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="relative flex transform flex-col items-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-lg transition-all hover:shadow-xl"
          >
            <div className="absolute -top-5 rounded-full bg-primary p-4 shadow-lg">
              <FaHeartbeat className="text-4xl text-white" />
            </div>
            <h3 className="mb-4 mt-8 text-xl font-semibold text-gray-800">
              Step 2: Schedule Your Donation
            </h3>
            <ul className="space-y-2 text-left text-gray-500">
              <li className="list-inside list-disc">
                Recipients will send you a blood donation request.
              </li>
              <li className="list-inside list-disc">
                Review the request details and decide approve or decline.
              </li>
              <li className="list-inside list-disc">
                Once approved, visit the donation center as scheduled and
                complete your donation.
              </li>
            </ul>
          </motion.div>

          {/* Line connecting Card 2 to central line */}
          <div className="absolute -right-[220px] top-1/2 hidden w-[13.7rem] -translate-y-1/2 transform rounded-md border border-primary sm:block" />
        </div>

        {/* Step 3 - Donate Blood */}
        <div className="relative flex w-96 flex-col items-center self-end">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="relative flex transform flex-col items-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-lg transition-all hover:shadow-xl"
          >
            <div className="absolute -top-5 rounded-full bg-primary p-4 shadow-lg">
              <FaHandHoldingHeart className="text-4xl text-white" />
            </div>
            <h3 className="mb-4 mt-8 text-xl font-semibold text-gray-800">
              Step 3: Donate Blood
            </h3>
            <ul className="space-y-2 text-left text-gray-500">
              <li className="list-inside list-disc">
                Complete a quick health check on arrival.
              </li>
              <li className="list-inside list-disc">
                Follow medical staff instructions during donation.
              </li>
              <li className="list-inside list-disc">
                Rest briefly and enjoy post-donation refreshments.
              </li>
            </ul>
          </motion.div>

          {/* Line connecting Card 3 to central line */}
          <div className="absolute -left-[110px] top-1/2 hidden w-[13.9rem] -translate-x-1/2 transform rounded-md border border-primary sm:block" />
        </div>
      </div>
    </section>
  );
};

export default StepsToDonate;
