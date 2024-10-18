import React from 'react'
import { Rating } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";


function SectionTop() {
  return (
    <>
    <div className='m-9'>
    <h1 className='text-center text-4xl font-bold my-6'>TOP SELLING</h1>
    <div className='flex justify-evenly items-center'>
      <div>
        <img src="https://tse1.mm.bing.net/th?id=OIP.opfasXbFc6aHb2aVOd899QHaKT&pid=Api&P=0&h=180" alt="product1" className='w-48 h-48 object-cover bg-gray-300 rounded'/>
        <h5 className='text-xl font-semibold'>T-shirt</h5>
        <Rating value={4} />
        <p className='font-semibold text-xl'>$120
          <span className='ml-6 text-gray-600 line-through'>$200</span>
          <span className='text-red-600 text-sm ml-3 bg-red-100 rounded p-1'>-20%</span>
        </p>
      </div>
      <div>
        <img src="" alt="product1" className='w-48 h-48 object-cover bg-gray-300'/>
        <h5 className='text-xl font-semibold'>T-shirt</h5>
        <Rating value={4} />
        <p className='font-semibold'>$120</p>
      </div>
    </div>
    <div className='flex justify-center items-center my-6'>
    <Button variant="outlined" className='rounded-full'>View All</Button>
    </div>
   </div>
    </>
  )
}

export default SectionTop