"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import AnimatedButton from "./UI/AnimatedButton";

const NavBar = () => {
  const navLinks = ["Home", "About", "Blogs", "Contact Us"];
  const [open, setOpen] = useState(false);
  return (
    <div className="px-6 md:px-14 py-6">
      <div className=" flex justify-between items-center">
        <Image
          src="/Logo/logo.webp"
          alt="Logo"
          width={150}
          height={100}
          priority={true}
          className="w-40 md:52 h-auto"
        />
        <div className="flex justify-center items-center gap-6">
          {/* This is for desktop view */}
          <div className="hidden md:block">
            {navLinks.map((link, index) => {
              return (
                <span
                  key={index}
                  className="ml-10 cursor-pointer hover:text-amber-300"
                >
                  {link}
                </span>
              );
            })}
          </div>
          <div className="hidden md:block">
            <div className="flex justify-between items-center gap-8">
              <AnimatedButton title="Login" />
              <AnimatedButton title="SignUp" />
            </div>
          </div>
          {/* THis is for responsive Icon */}
          <div className=" text-4xl md:hidden">
            {open ? (
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <FaXmark />
              </button>
            ) : (
              <button onClick={() => setOpen(true)} aria-label="Open menu">
                <FaBarsStaggered />
              </button>
            )}
          </div>

          {/* This is For Mobile Responsive Icons */}
          {open && (
            <div className="absolute left-0 top-0 pt-6 h-full bg-gray-800  rounded-tr-2xl w-2/3 ">
              {navLinks.map((link, index) => {
                return (
                  <div
                    key={index}
                    className="text-3xl text-white text-center leading-16"
                  >
                    <a href="#">{link}</a>
                  </div>
                );
              })}
              <div className="absolute bottom-3 flex space-x-4 w-full justify-center items-center ">
                <AnimatedButton title="Login" />
                <AnimatedButton title="SignUp" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
