import React from "react";
import TestimonailsCard from "./UI/TestimonailsCard";

const TestimonailsSection = () => {
  return (
    <div className="bg-[#fafafa]  mt-5 px-6 md:px-14 py-8">
      <div className="text-center">
        <h1 className="text-xl font-light mb-4">Testimonails</h1>
        <p className="text-3xl sm:text-4xl font-bold md:px-36 lg:px-96">
          Our Clients Say About Us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-8 gap-6">
        <TestimonailsCard
          image="/image/p1.webp"
          name="John Doe"
          company="Amazon"
        />
        <TestimonailsCard
          image="/image/p2.webp"
          name="Jane Smith"
          company="Ebay"
        />
        <TestimonailsCard
          image="/image/p3.webp"
          name="Alice Johnson"
          company="Etsy"
        />
      </div>
    </div>
  );
};

export default TestimonailsSection;
