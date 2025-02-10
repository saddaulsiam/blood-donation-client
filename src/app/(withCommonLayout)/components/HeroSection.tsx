"use client";

import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/variants";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import Lottie from "lottie-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import hero1 from "../../../../public/hero.json";
import hero2 from "../../../../public/mobileHero.json";

const HeroSection = () => {
  const route = useRouter();
  const { data: user } = useGetMeQuery("");

  return (
    <header className="container mt-16 grid items-center sm:mt-0 sm:grid-cols-2 lg:h-[39.5rem]">
      {/* details */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col space-y-5"
      >
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
          <Button
            onClick={() => route.push(`profile/update/${user?.id}`)}
            className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-red-500 hover:shadow-lg"
          >
            Become a Donor
          </Button>
          <Button
            onClick={() => route.push("/donors")}
            className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-800 shadow-md transition hover:bg-gray-100 hover:shadow-lg"
          >
            Find a Donor
          </Button>
        </div>
      </motion.div>

      {/* image */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center sm:justify-end"
      >
        <Lottie animationData={hero2} loop className="md:hidden" />
        <Lottie animationData={hero1} loop className="hidden md:block" />
      </motion.div>
    </header>
  );
};

export default HeroSection;
