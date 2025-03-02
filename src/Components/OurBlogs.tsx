import React from "react";
import BlogsCard from "./UI/BlogsCard";

const OurBlogs = () => {
  return (
    <div className="bg-[#fafafa] mt-5 px-6 md:px-14 py-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-8 gap-6">
        <BlogsCard image="/image/b1.webp" name="Red Powder" />
        <BlogsCard image="/image/b2.webp" name="Black Powder" />
        <BlogsCard image="/image/b3.webp" name="Green Powder" />
      </div>
    </div>
  );
};

export default OurBlogs;
