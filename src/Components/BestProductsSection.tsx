import React from "react";
import ProductCard from "./UI/ProductCard";

const BestProductsSection = () => {
  return (
    <div className="bg-[#fafafa]  mt-5 px-6 md:px-14 py-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Our Best Products
        </h1>
        <p className="font-light md:px-36 lg:px-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          voluptatem quos iste delectus laboriosam, provident quam, eos eaque ab
          deleniti nobis asperiores est neque quidem?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center my-8 gap-6">
        <ProductCard name="Red Powder" image="/image/p1.webp" price={15.88} />
        <ProductCard name="Green Powder" image="/image/p2.webp" price={12.5} />
        <ProductCard name="Black Powder" image="/image/p3.webp" price={18.0} />
        <ProductCard name="Yellow Power" image="/image/p4.webp" price={14.0} />
      </div>
    </div>
  );
};

export default BestProductsSection;
