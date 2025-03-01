import Image from "next/image";
import React from "react";
import AnimatedButton from "./AnimatedButton";

// This is to setup propstypes
interface ProductCardProps {
  name: string;
  image: string;
  price: number;
}
const ProductCard = ({ name, image, price }: ProductCardProps) => {
  return (
    <div className="px-6 py-4 w-64 shadow-2xl rounded-lg border-2 hover:scale-110 overflow-hidden duration-300 bg-white">
      <div className="flex items-center justify-center flex-col">
        <div>
          <Image src={image} alt="Product One" height={200} width={200} />
        </div>
        <div className="text-center">
          <h1 className="font-bold text-2xl mb-2">{name}</h1>
          <p>Price of Pack of 100g</p>
          <h2 className="font-bold text-2xl my-2">${price}</h2>
          <AnimatedButton title="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
