import Image from "next/image";
import React from "react";

interface TestimonailsCardProps {
  image: string;
  name: string;
  company: string;
}
const TestimonailsCard = ({ image, name, company }: TestimonailsCardProps) => {
  return (
    <div className="w-72 lg:w-96 border rounded-xl shadow-2xl px-3 hover:scale-105 duration-300">
      <div className="space-y-6 mb-4">
        <div>
          <Image
            src={image}
            alt="Image"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>
        <div>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam assumenda asperiores porro.assumenda asperiores porro."
          </p>
        </div>
        <div className="font-bold">
          <h1 className="text-3xl">{name}</h1>
          <p>{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonailsCard;
