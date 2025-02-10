"use client";

import { Button } from "@/components/ui/button";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import animationData from "../../../../public/about.json";

const AboutSection = () => {
  const route = useRouter();
  const { data: user } = useGetMeQuery("");

  return (
    <section className="container my-40">
      <h4 className="pb-8 text-center text-2xl font-semibold text-gray-800">
        <span className="text-primary">#</span> About Us
      </h4>

      <div className="grid grid-cols-1 items-center gap-28 lg:grid-cols-5">
        {/* Image Section */}
        <div className="relative col-span-1 flex justify-center lg:col-span-2 lg:justify-start">
          <Lottie animationData={animationData} loop />
        </div>

        {/* Text Content */}
        <div className="col-span-1 flex flex-col justify-center space-y-6 lg:col-span-3">
          <h2 className="sm:text-3xl text-2xl font-bold leading-tight text-gray-800">
            Save a Life, Donate Blood Today
          </h2>

          <p className="text-lg text-gray-700">
            Our mission is to bridge the gap between blood donors and those in
            urgent need. We are committed to making the process of blood
            donation seamless, accessible, and life-changing.
          </p>

          {/* Key Features */}
          <div className="space-y-3 text-lg text-gray-600">
            <p>🔹 Find and connect with nearby donors easily.</p>
            <p>🔹 Support emergency cases with instant donor matching.</p>
            <p>🔹 Join a community of lifesavers and make an impact.</p>
          </div>

          <Button
            onClick={() => route.push(`profile/update/${user?.id}`)}
            className="mt-6 w-max rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-red-500 hover:shadow-xl"
          >
            Become a Donor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
