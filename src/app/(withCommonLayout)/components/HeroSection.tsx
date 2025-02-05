"use client";

import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import animationData from "../../../../public/heroAnimation.json";

const HeroSection = () => {
  return (
    <header className="container mt-10 grid sm:mt-0 sm:grid-cols-2 md:h-[38rem]">
      {/* details */}
      <div className="flex flex-col justify-center space-y-5">
        <h4 className="text-2xl font-bold tracking-tight text-gray-800">
          Be a Hero 🦸
        </h4>
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 lg:text-5xl">
          Donate <span className="text-primary">Blood,</span> Save Lives
        </h1>
        <p className="text-lg leading-8 text-gray-600">
          Your blood donation is more than just a gift; it&apos;s a lifeline
          that transforms hope into survival for those in critical need. Each
          donation has the potential to save up to three lives.
        </p>
        <p className="pb-3 pt-10 font-medium text-slate-600">
          🔴 Find a Donor | ❤️ Become a Donor | 🩸 Save a Life
        </p>
        <div className="flex space-x-5">
          <Button
            variant="default"
            className="transform rounded-lg bg-primary text-white shadow-md transition duration-200 ease-in-out hover:scale-105"
          >
            Become a Donor
          </Button>
          {/* info */}
          <Button className="rounded-lg border border-gray-300 bg-white text-black shadow transition duration-200 ease-in-out hover:scale-105 hover:bg-gray-100">
            Find a Donor&apos;s
          </Button>
        </div>
      </div>

      {/* image */}
      <div className="flex flex-1 justify-end">
        <Lottie animationData={animationData} className="" loop={true} />
      </div>
    </header>
  );
};

export default HeroSection;
