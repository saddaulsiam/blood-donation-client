"use client";

import CountUp from "react-countup";

const CoverageArea = () => {
  const stats = [
    { label: "Cities", value: 64, text: "We are Coverage in" },
    { label: "Donors", value: 500, text: "Our Total" },
    { label: "Donation", value: 5000, text: "Complete Total" },
    { label: "Donation", value: 100, text: "Inprogress" },
  ];
  return (
    <section className="container my-20 text-center">
      <h4 className="pb-8 text-2xl font-semibold text-gray-800">
        <span className="text-primary">#</span> Coverage Area
      </h4>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="rounded-lg bg-gray-50 p-5 shadow">
            <p className="text-sm text-gray-600">{stat.text}</p>
            <h3 className="pt-1 text-2xl font-bold text-black">
              <CountUp start={0} end={stat.value} duration={3} />{" "}
              <span className="text-red-500">{stat.label}</span>
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoverageArea;
