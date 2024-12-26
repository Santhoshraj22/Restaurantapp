import React from 'react'
import { ReviewCard } from '../Layout/ReviewCard'
import person1 from "../assets/person1.jpg"
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.jpg"

export const Review = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
       <h1 className='text-4xl font-semibold text-center lg:pt-5 pt-24 pb-10'> Coustomer's Review </h1>

       <div className='flex flex-col md:flex-row gap-5 mt-5'>
              <ReviewCard img={person1} name=" Prem" />
              <ReviewCard img={person2} name=" Lavanya " />
              <ReviewCard img={person3} name=" Mike
              " />
       </div>
    </div>
  ) 
}
