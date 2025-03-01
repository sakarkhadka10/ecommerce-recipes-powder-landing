import React from "react";
import CategoriesCard from "./UI/CategoriesCard";

const Categories = () => {
  return (
    <div className="h-[75vh] flex justify-center items-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-11 lg:gap-34">
        <CategoriesCard title="Best Spices Blends" image="/image/a1.png" />
        <CategoriesCard title="Roots And Rhizomes" image="/image/a2.png" />
      </div>
    </div>
  );
};

export default Categories;
