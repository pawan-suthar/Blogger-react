import React from "react";

const Category = () => {
  return (
    <div className="w-[90%] lg:w-[85%] mx-auto -mt-[50px] overflow-x-scroll lg:overflow-hidden">
      <ul className="flex font-semibold text-gray-500 text-sm lg:text-xl gap-5 lg:gap-5  border-b-2 ">
        <li className=" hover:text-black border-b-2 border-transparent hover:border-black pb-5 min-w-max cursor-pointer">
          View all
        </li>
        <li className=" hover:text-black border-b-2 border-transparent hover:border-black pb-5 min-w-max cursor-pointer">
          Technology
        </li>
        <li className=" hover:text-black border-b-2 border-transparent hover:border-black pb-5 min-w-max cursor-pointer">
          Lifestyle
        </li>
        <li className=" hover:text-black border-b-2 border-transparent hover:border-black pb-5 min-w-max cursor-pointer">
          Health & Wellness
        </li>
        <li className=" hover:text-black border-b-2 border-transparent hover:border-black pb-5 min-w-max cursor-pointer">
          Food & Recipes
        </li>
        <li className=" hover:text-black border-b-2 border-transparent hover:border-black pb-5 min-w-max cursor-pointer">
          Inspirational
        </li>
        <li className=" hover:text-black border-b-2 border-transparent hover:border-black pb-5 min-w-max cursor-pointer">
          Entertainment
        </li>
      </ul>
    </div>
  );
};

export default Category;
