import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const BlogpostContainer = ({ title, subtitle, img, tag }) => {
  return (
    <div className=" w-full lg:w-[90%] mt-10 mb-5 overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="  hover:shadow-2xl ">
        <img src={img} alt="picture" className="w-full h-[40vh] rounded-xl" />
        <div className="-mt-[80px] p-5 font-semibold text-white backdrop-blur-lg flex justify-between">
          <div>
            <h2 className="font-semibold">{title}</h2>
            <span className="font-semibold">8/Aug/2023</span>
          </div>
          <h2 className="font-semibold">{tag}</h2>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-2xl lg:text-xl hover:underline mt-5 mb-2 cursor-pointer">
          {title}
        </h2>
        <p className="font-medium text-gray-500 text-lg mb-1">{subtitle}</p>
        <button className="font-semibold flex">
          Read post
          <span className="my-auto ml-2">
            <FiArrowUpRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogpostContainer;
