

import React from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export const Dishescard = (props) => {
  return (
    <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-5">
      {/* Image Section */}
      <img className="rounded-xl w-full h-48 object-cover" src={props.img} alt={props.title} />

      {/* Card Content */}
      <div className="space-y-4 pt-4">
        <h3 className="font-semibold text-center text-xl">{props.title}</h3>

        {/* Star Ratings */}
        <div className="flex justify-center gap-1">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>

        {/* Price and Button */}
        <div className=" flex flex-row items-center justify-center gap-3">
          <h3 className="font-semibold text-lg mr-10"> &#8377;{props.price}</h3>
          <button className="px-6 py-2 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
