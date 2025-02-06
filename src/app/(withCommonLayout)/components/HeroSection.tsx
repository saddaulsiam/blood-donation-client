"use client";

import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import hero1 from "../../../../public/hero.json";
import hero2 from "../../../../public/mobileHero.json";

const HeroSection = () => {
  return (
    <header className="container mt-10 grid items-center sm:mt-0 sm:grid-cols-2 lg:h-[39.5rem]">
      {/* details */}
      <div className="flex flex-col space-y-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 lg:text-5xl">
          Donate <span className="text-primary">Blood,</span> Save Lives
        </h1>
        <p className="max-w-xl text-lg leading-8 text-gray-600">
          Your blood donation is more than just a gift it&apos;s a lifeline that
          transforms hope into survival for those in critical need. Each
          donation has the potential to save up to three lives.
        </p>
        <p className="pb-3 pt-6 font-medium text-gray-700">
          🔴 Find a Donor | ❤️ Become a Donor | 🩸 Save a Life
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-red-500 hover:shadow-lg">
            Become a Donor
          </Button>
          <Button className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-800 shadow-md transition hover:bg-gray-100 hover:shadow-lg">
            Find a Donor
          </Button>
        </div>
      </div>

      {/* image */}
      <div className="flex justify-center sm:justify-end">
        <Lottie animationData={hero2} loop className="md:hidden" />
        <Lottie animationData={hero1} loop className="hidden md:block" />
      </div>
    </header>
  );
};

export default HeroSection;
