"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "motion/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    role: "Donor",
    feedback:
      "I never realized how much one small act could change someone's life. Donating blood is easy, quick, and has a huge impact.",
    rating: 4,
  },
  {
    name: "Jane Smith",
    role: "Recipient",
    feedback:
      "Thanks to a generous donor, I received the blood I needed and felt like I had a second chance at life.",
    rating: 5,
  },
  {
    name: "Mark Johnson",
    role: "Donor",
    feedback:
      "It’s an incredible feeling knowing that your donation could be the reason someone else survives.",
    rating: 3,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container">
        <motion.h4
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="pb-20 text-center text-2xl font-bold text-gray-800"
        >
          <span className="text-primary">#</span> What Our Donors & Recipients
          Say
        </motion.h4>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-8 sm:flex-nowrap"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative max-w-sm rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-md">
                <FaQuoteLeft className="text-2xl text-white" />
              </div>

              {/* Testimonial Content */}
              <p className="mt-6 text-lg text-gray-700">
                {testimonial.feedback}
              </p>

              {/* Author Details */}
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>

              {/* Rating */}
              <div className="mt-4 flex space-x-1">
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={`text-xl ${starIndex < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
