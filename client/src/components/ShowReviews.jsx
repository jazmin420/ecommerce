import React, { useRef } from 'react'
import casualImg from '../assets/casual.png'
import partyImg from '../assets/party.png'
import formalImg from '../assets/formal.png'
import gymImg from '../assets/gym.png'
import {
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Card, IconButton } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import gsap from 'gsap'

const reviews = [
  {
    id: 1,
    text: "This product is amazing! Highly recommend it.",
    customer: "John Doe",
  },
  {
    id: 2,
    text: "Great service and quality. Will buy again.",
    customer: "Jane Smith",
  },
  {
    id: 3,
    text: "Fantastic experience. Five stars!",
    customer: "Emily Johnson",
  },
  {
    id: 4,
    text: "Fantastic experience. Five stars!",
    customer: "Emily Johnson",
  },
  { id: 4, text: "Fantastic experience. Five stars!", customer: "Chris Evans" },
  { id: 5, text: "Fantastic experience. Five stars!", customer: "Alex" },
  { id: 6, text: "Fantastic experience. Five stars!", customer: "Mike Ross" },
  { id: 7, text: "Fantastic experience. Five stars!", customer: "Sarah Connor" },
  { id: 8, text: "Fantastic experience. Five stars!", customer: "Alice Johnson" },
];

function ShowReviews() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const totalSlides = reviews.length;

  const slideDuration = 1000; // Duration for each slide to move

  useEffect(() => {
    const animateCarousel = () => {
      gsap.to(carouselRef.current, {
        x: `-${activeIndex * 100}%`,
        duration: 3,
        ease: "power2.inOut",
        onComplete: () => {
          if (!isPaused) {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
          }
        },
      });
    };

    animateCarousel(); // Initial animation
    const animationLoop = setInterval(() => {
      if (!isPaused) {
        animateCarousel();
      }
    }, slideDuration);

    return () => clearInterval(animationLoop); // Clear interval on component unmount
  }, [activeIndex, isPaused, totalSlides]);

  const nextSlide = () => {
    setIsPaused(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setTimeout(() => setIsPaused(false), 5000); // Pause for 5 seconds
  };

  const prevSlide = () => {
    setIsPaused(true);
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
    setTimeout(() => setIsPaused(false), 5000); // Pause for 5 seconds
  };

  return (
    <>
    <div className='text-center bg-gray-200 rounded-lg m-9 p-6'>
      <h1 className='text-center text-4xl font-bold '>BROWSE BY DRESS STYLE</h1>
      <div className='flex justify-center flex-wrap p-6 gap-2'>      
          <img className='border-2 rounded-2xl w-[400px] h-[270px]' src={casualImg} alt="" />     
        <img className='border-2 rounded-2xl w-[650px] h-[270px]' src={formalImg} alt="" />   
        <img className='border-2 rounded-2xl w-[650px] h-[270px]' src={partyImg} alt="" />       
        <img className='border-2 rounded-2xl w-[400px] h-[270px]' src={gymImg} alt="" />
      </div>
    </div>

    <section id='review'>
    <div className="flex justify-between items-center m-9">
          <h1 className="text-center text-4xl font-bold my-6">OUR HAPPY CUSTOMERS</h1>
          <div>
            <IconButton variant="outlined" className="mr-3"onClick={() => { handlePause(); prevSlide(); }}>
              <FaArrowLeft className="w-6 h-6 text-gray-700" />
            </IconButton>
            <IconButton variant="outlined" onClick={() => { handlePause(); nextSlide(); }}>
              <FaArrowRight className="w-6 h-6 text-gray-700" />
            </IconButton>
          </div>
        </div>

        <div className="overflow-hidden w-full relative">
          <div className="flex w-full" ref={carouselRef} >
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="border-2 w-1/3 min-w-[300px] h-[300px] p-2 text-center mx-6 my-3 shadow-lg bg-white rounded-lg"
              >
                <CardBody>
                  <Rating value={4} />
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {review.customer}
                  </Typography>
                  <Typography className="text-ellipsis overflow-hidden line-clamp-4">
                    {review.text}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
    </section>
    </>
  )
}

export default ShowReviews