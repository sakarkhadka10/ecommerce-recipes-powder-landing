import Image from "next/image";
import React from "react";

const FooterSection = () => {
  const footerNavLink = [
    "About",
    "Blog",
    "Contact Us",
    "Services",
    "Portfolio",
    "Testimonials",
    "FAQ",
  ];
  return (
    <div className="py-16 flex justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center">
          <Image
            src="/Logo/logo.webp"
            alt="Logo"
            width={250}
            height={100}
            className="w-52"
          />
        </div>
        <div className="mt-11">
          <div className="flex justify-center items-center gap-6 flex-col md:flex-row ">
            {footerNavLink.map((link, index) => {
              return (
                <div key={index}>
                  <a href="#">{link}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center mt-16">
          <span>© 2025 AlienXStudio.com. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
