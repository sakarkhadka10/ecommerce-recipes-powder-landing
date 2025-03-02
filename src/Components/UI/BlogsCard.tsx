import Image from "next/image";
import React from "react";
import AnimatedButton from "./AnimatedButton";
import { FaRegComment, FaRegHeart } from "react-icons/fa6";

interface BlogsCardProps {
  image: string;
  name: string;
}
const BlogsCard = ({ image, name }: BlogsCardProps) => {
  return (
    <div className="w-80 lg:w-96 h-auto px-4 py-2 rounded-xl shadow-2xl bg-white hover:scale-105 duration-300">
      <div className="flex  justify-center flex-col space-y-6">
        <div>
          <Image
            src={image}
            alt={name}
            height={350}
            width={600}
            className="w-96 rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-lg">12/12/2021</h4>
          <h1 className="font-bold text-3xl">{name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            adipisci nemo ipsum exercitationem, ab, officiis libero magni
            voluptas rerum assumenda veritatis maxime nisi, quod corrupti.
          </p>
          <div className="flex justify-between items-center">
            <AnimatedButton title="Read More" />
            <div className="flex justify-center gap-2 text-2xl items-center">
              <FaRegComment />0
              <FaRegHeart />0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
