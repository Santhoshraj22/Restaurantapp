

import React from 'react';

export const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white shadow-lg border border-lightText p-5 rounded-md">
      {/* Text Section */}
      <div>
        <p className="text-lightText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est quibusdam non reprehenderit saepe ipsam ratione quia eligendi possimus dolor. Est, voluptatibus quis? Harum nisi deleniti, debitis ratione accusantium neque?
        </p>
      </div>

      {/* User Info */}
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <img className="rounded-full w-12 h-12 object-cover" src={props.img} alt="Reviewer" />
        <h3 className="font-semibold">{props.name}</h3>
      </div>
    </div>
  );
};
