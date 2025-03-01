import Image from "next/image";
import React from "react";

interface CategoriesCardProps {
  image: string;
  title: string;
}
const CategoriesCard = ({ image, title }: CategoriesCardProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto group overflow-hidden z-10 border-2 rounded-xl">
      {/* Constrain width and center */}
      <Image
        src={image}
        alt={title}
        width={500}
        height={350}
        className="object-cover rounded-xl duration-500 group-hover:scale-125"
      />
      <div className="absolute bottom-2 lg:-bottom-24 lg:group-hover:bottom-2 duration-500 scroll-m-20 bg-gray-700 text-white py-2 w-full">
        <h1 className="text-4xl text-center tracking-tighter">{title}</h1>
      </div>
    </div>
  );
};

export default CategoriesCard;
