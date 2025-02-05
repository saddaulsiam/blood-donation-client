import React from "react";

const CoverageArea = () => {
  return (
    <section className="container">
      <div className="text-center">
        <h4 className="text-2xl font-bold text-[#101010]">Coverage Area</h4>
        <p className="pt-5 leading-7 text-slate-600">
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Ratione, optio!
        </p>
      </div>
      <div className="mt-16 grid grid-cols-4 gap-5">
        <div className="space-y-2 rounded-md bg-slate-100 p-5 pl-10">
          <p className="text-xl font-semibold text-slate-600">
            We are Coverage in
          </p>
          <p className="text-5xl font-semibold text-slate-900">50</p>
          <p className="text-lg font-semibold text-slate-600">City</p>
        </div>
        <div className="space-y-2 rounded-md bg-slate-100 p-5 pl-10">
          <p className="text-xl font-semibold text-slate-600">Our Total</p>
          <p className="text-5xl font-semibold text-slate-900">50</p>
          <p className="text-lg font-semibold text-slate-600">Donor</p>
        </div>
        <div className="space-y-2 rounded-md bg-slate-100 p-5 pl-10">
          <p className="text-xl font-semibold text-slate-600">Complete Total</p>
          <p className="text-5xl font-semibold text-slate-900">500</p>
          <p className="text-lg font-semibold text-slate-600">Donation</p>
        </div>
        <div className="space-y-2 rounded-md bg-slate-100 p-5 pl-10">
          <p className="text-xl font-semibold text-slate-600">Inprogress</p>
          <p className="text-5xl font-semibold text-slate-900">500</p>
          <p className="text-lg font-semibold text-slate-600">Donation</p>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;
