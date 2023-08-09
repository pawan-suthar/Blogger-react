import React from "react";

const Newsletter = () => {
  return (
    <div className="w-[85%] flex justify-between mx-auto my-[150px]">
      <div>
        <h1 className="font-bold text-6xl mb-10 ">Untitled Blog</h1>
        <div className="flex flex-col lg:flex-row">
          <input
            type="text"
            name="search"
            placeholder="Enter your email"
            className="  px-5 py-[12px] border border-gray-300  outline-none rounded-full lg:w-[24vw] font-semibold"
          />
          <button className="px-5 py-[12px] bg-black text-white rounded-full font-medium lg:-ml-10 mt-3 lg:mt-0 ">
            Subscribe
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <p className=" mt-1.5 text-gray-500 w-[20vw] font-semibold text-lg justify-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nobis
          nostrum vita
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
