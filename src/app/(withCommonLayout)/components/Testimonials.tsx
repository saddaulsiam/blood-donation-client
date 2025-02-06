/* import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="container py-20">
      <h4 className="pb-20 text-center text-2xl font-semibold text-gray-800">
        <span className="text-primary">#</span> Testimonials
      </h4>

      <div className="flex flex-wrap justify-center gap-10 sm:flex-nowrap">
        <div className="relative max-w-sm transform rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
          <div className="absolute left-1/2 top-0 -mt-8 flex h-16 w-16 -translate-x-1/2 transform items-center justify-center rounded-full bg-primary">
            <FaQuoteLeft className="text-3xl text-white" />
          </div>
          <p className="mb-4 text-xl text-gray-600">
            I never realized how much one small act could change someone&apos;s
            life. Donating blood is easy, quick, and has a huge impact.
          </p>
          <p className="text-xl font-semibold text-gray-700">John Doe</p>
          <p className="text-sm text-gray-400">Donor</p>
          <div className="mt-4 flex space-x-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-500" />
          </div>
        </div>

        <div className="relative max-w-sm transform rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
          <div className="absolute left-1/2 top-0 -mt-8 flex h-16 w-16 -translate-x-1/2 transform items-center justify-center rounded-full bg-primary">
            <FaQuoteLeft className="text-3xl text-white" />
          </div>
          <p className="mb-4 text-xl text-gray-600">
            Thanks to a generous donor, I received the blood I needed and felt
            like I had a second chance at life.
          </p>
          <p className="text-xl font-semibold text-gray-700">Jane Smith</p>
          <p className="text-sm text-gray-400">Recipient</p>
          <div className="mt-4 flex space-x-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
        </div>

        <div className="relative max-w-sm transform rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
          <div className="absolute left-1/2 top-0 -mt-8 flex h-16 w-16 -translate-x-1/2 transform items-center justify-center rounded-full bg-primary">
            <FaQuoteLeft className="text-3xl text-white" />
          </div>
          <p className="mb-4 text-xl text-gray-600">
            It’s an incredible feeling knowing that your donation could be the
            reason someone else survives.
          </p>
          <p className="text-xl font-semibold text-gray-700">Mark Johnson</p>
          <p className="text-sm text-gray-400">Donor</p>
          <div className="mt-4 flex space-x-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-500" />
            <FaStar className="text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
 */

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
    <section className="bg-gray-50 py-20">
      <div className="container">
        <h4 className="pb-20 text-center text-2xl font-bold text-gray-800">
          <span className="text-primary">#</span> What Our Donors & Recipients
          Say
        </h4>

        <div className="flex flex-wrap justify-center gap-8 sm:flex-nowrap">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
