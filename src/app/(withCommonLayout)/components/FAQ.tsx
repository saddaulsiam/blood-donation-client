"use client";
import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the currently active accordion item
    } else {
      setActiveIndex(index); // Open the clicked accordion item
    }
  };

  const faqData = [
    {
      question: "What is blood donation?",
      answer:
        "Blood donation is the process of giving blood to be used for medical treatments and emergencies. It helps save lives and supports medical treatments.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "You can donate whole blood every 56 days, and platelet donation can be done more frequently, typically once every 7 days.",
    },
    {
      question: "Is blood donation safe?",
      answer:
        "Yes, blood donation is a safe and sterile process. The equipment used is disposable, and the procedure is monitored by trained medical professionals.",
    },
    {
      question: "What are the requirements for donating blood?",
      answer:
        "You must be at least 17 years old, weigh at least 110 pounds, and be in good health. You’ll also undergo a health screening before donating.",
    },
    {
      question: "How can I become a blood donor?",
      answer:
        "You can register through our website or visit a nearby donation center. After signing up, you’ll be contacted for your donation appointment.",
    },
  ];

  return (
    <section className="container mb-40 pt-20">
      <h4 className="pb-14 text-center text-2xl font-semibold text-gray-800">
        <span className="text-primary"># </span>
        Frequently Asked Questions
      </h4>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border-b bg-white shadow transition-shadow hover:shadow-md"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex cursor-pointer items-center justify-between px-6 py-5 transition-all duration-300 hover:bg-gray-50">
              <h3 className="text font-semibold text-gray-700">
                {faq.question}
              </h3>
              <span
                className={`transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="h-6 w-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
            {activeIndex === index && (
              <div className="bg-gray-50 px-6 pb-6 text-lg text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
