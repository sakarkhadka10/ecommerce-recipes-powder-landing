import React from "react";

const NewsLetter = () => {
  return (
    <div className="h-[65vh] px-6 flex justify-center items-center">
      <div className=" w-[80vw]">
        <div className="px-11 py-11 rounded-xl shadow-2xl border border-gray-500 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 space-y-6 ">
            <div className="text-center md:text-start">
              <h1 className=" text-2xl font-bold text-[#e86b0f] mb-3">
                Subscribe To NewsLetter
              </h1>
              <p>
                Provide your email to get email notification when we launch new
                products or publish new articles
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-4 border-black border rounded-md text-gray-700 placeholder-gray-400"
              />
              <button className=" py-4 md:px-6 w-full md:w-auto text-white bg-[#e86b0f] rounded-xl hover:bg-blue-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
