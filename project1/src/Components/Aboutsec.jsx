import React from 'react';
import prawn from '../assets/prawn.jpg';
import { Button } from 'react-scroll';

export const Aboutsec = () => {
  return (
    <div className="mt-40 mb-40 screen flex flex-col lg:flex-row items-center lg:items-start justify-center lg:px-10 px-6 space-y-6 lg:space-y-0 lg:space-x-10">
      {/* Image Section */}
      <img
        className="h-80 w-80 object-cover rounded-lg shadow-lg"
        src={prawn}
        alt="Prawn Dish"
      />

      {/* Content Section */}
      <div className="space-y-4 lg:max-w-2xl">
        <h1 className="text-2xl font-bold">Why Choose Us</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
          blanditiis necessitatibus totam, accusantium assumenda itaque
          ratione? Eaque, reprehenderit, aliquam praesentium sapiente, iure
          temporibus repellat voluptatum hic a officiis quidem provident.
        </p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisici
          ng elit. Nemo optio fugiat, expedita minima iste omnis, natus 
          laboriosam nobis enim blanditiis ducimus tempo
        </p>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          mollitia minus at dolores ipsam? Minima ea unde non ad quae nulla
          ullam deleniti aliquid itaque repellat ducimus, inventore ratione
          similique fuga quo, ullam omnis deserunt dolorum quos a ipsa
          doloribus, ducimus mollitia perferendis eos voluptatem placeat autem
          reiciendis velit blanditiis sint?
        </p>
        <div className='flex justify-center lg:justify-start'>
        
          <button className='px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full'> Learn More</button>
        </div>
      </div>
    </div>
  );
};
