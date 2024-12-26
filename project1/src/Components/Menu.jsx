import React from 'react'
import { Dishescard } from '../Layout/Dishescard'
import parotta from "../assets/parotta.jpg"
 import lolipop from "../assets/lolipop.jpg"
import butternan from "../assets/butternan.jpg" 
 import Noodels from "../assets/Noodels.jpg"
 import barbeq  from "../assets/barbeq.jpg"
import prawn  from "../assets/prawn.jpg"

export const Menu = () => {
  return (
    <div>
        <h1 className='text-4xl font-semibold  text-center pt-25 pb-10 mt-10 '> Premium Menu </h1>
         
        <div className='flex flex-wrap gap-8 justify-center cursor-pointer'> 
                    
                    <Dishescard img={Noodels} title="Chiken Noodles" price="200" />
                    <Dishescard img={barbeq} title="Grill" price="199" />
                    <Dishescard img={prawn} title="Prawn" price="100" />
        </div>
    </div>
  )
}




