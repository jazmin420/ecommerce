import React, { useRef } from 'react'
import { Button } from "@material-tailwind/react";
import bgHome from '../assets/bgHome.png'
import CountUp from 'react-countup';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

function Explore() {
 const divRef = useRef(null);
 const bgRef = useRef(null);

 useGSAP(() => {
  gsap.fromTo(divRef.current,
    {y: -100, opacity: 0},
    {y:0, opacity: 1, duration: 1.5}
  ),
  gsap.fromTo(bgRef.current,
    {x: 200, opacity: 0},
    {x: 0, opacity: 1, duration: 2}
  )
 }, [])

  return (
    <>
    <div ref={bgRef} className= "w-full bg-cover bg-center" style={{ backgroundImage: `url(${bgHome})` }}>
      <div  ref={divRef} className="w-1/2 p-12">
        <h1 className="text-6xl font-bold my-3">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='text-gray-500 my-3'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <Link to={'/shop'}>
        {/* <Button variant="filled" className='rounded-full'>Shop Now</Button> */}
        </Link>
      
      <div className='flex justify-between items-center my-6 flex-wrap'>
        <div>
          <CountUp className='text-3xl font-semibold' start={0} end={200} suffix="+" duration={3} />
          <p className='text-gray-500'>International brands</p>
        </div>
        <div>
          <CountUp className='text-3xl font-semibold' start={1500} end={2000} suffix="+" duration={3} />
          <p className='text-gray-500'>High-Quality Products</p>
        </div>
        <div>
          <CountUp className='text-3xl font-semibold' start={29900} end={30000} suffix="+" duration={3} />
          <p className='text-gray-500'>High-Quality Products</p>
        </div>
      </div>
      </div>
    </div>
   
    </>
  )
}

export default Explore