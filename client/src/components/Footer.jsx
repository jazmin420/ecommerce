import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  Input,
  Button
} from "@material-tailwind/react";
function Footer() {
  return (
    <>
    <div className='relative mt-60'>
      <div className='bg-black w-3/4 m-auto rounded-lg py-6 px-12 flex justify-center items-center absolute inset-x-0 -top-1/3'>
      <h2 className='text-3xl font-bold text-white'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
          <div className="mb-1 flex flex-col gap-1">
            <Input
              size="md"
              placeholder="Enter Your Email Address"
              className="bg-white  rounded-md text-black"
              variant="static"
            />
            <Button className="mt-6 bg-white text-black" fullWidth variant='outlined'>
            subscribe to newsletter
          </Button>
          </div>      
        </form>
      </div>
       <footer className='px-12 pt-28 pb-6' style={{backgroundColor:'#F0F0F0'}}>
       <div className='flex flex-wrap justify-evenly items-center gap-6 border-b pb-5 border-b-gray-700'>
       <div className='flex flex-col gap-3 w-1/4'>
            <Link to='/'>
            <img className='w-[200px] pb-3' src={logo} alt="ecommerce logo" />
            </Link>
            <p className='pb-3 text-gray-500 text-sm'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className='flex justify-start gap-x-4'>
              <a className='rounded-full bg-white p-2 border border-gray-400' href='https://twitter.com/' target='_blank'><FaXTwitter /></a>
              <a className='rounded-full bg-white p-2 border border-gray-400' href='https://www.instagram.com/' target='_blank'><FaInstagram /></a>
              <a className='rounded-full bg-white p-2 border border-gray-400' href='https://www.facebook.com/' target='_blank'><FaFacebook /></a>
              <a className='rounded-full bg-white p-2 border border-gray-400' href='https://github.com/' target='_blank'><FaGithub /></a>
              </div>
          </div>
         <div className='flex flex-col text-gray-500 gap-3 text-sm'>
          <p className='text-lg font-semibold pb-3 text-gray-900'>COMAPANY</p>
          <Link to='/about'>About</Link>
          <Link to='/about'>Features</Link>
          <Link to='/about'>Works</Link>
          <Link to='/about'>Career</Link>
         </div>
         <div className='flex flex-col text-gray-500 gap-3 text-sm'>
          <p className='text-lg font-semibold pb-3 text-gray-900'>HELP</p>
          <Link to='/'>Customer Support</Link>
          <Link to='/'>Delivery Details</Link>
          <Link to='/'>Terms & Conditions</Link>
          <Link to='/'>Privacy Policy</Link>
         </div>
         <div className='flex flex-col text-gray-500 gap-3 text-sm'>
          <p className='text-lg font-semibold pb-3 text-gray-900'>FAQ</p>
          <Link to='/'>Account</Link>
          <Link to='/'>Manage Deliveries</Link>
          <Link to='/'>Orders</Link>
          <Link to='/'>Payments</Link>
         </div>
         <div className='flex flex-col text-gray-500 gap-3 text-sm'>
          <p className='text-lg font-semibold pb-3 text-gray-900'>RESOURCES</p>
          <Link to='/'>Free eBooks</Link>
          <Link to='/'>Development Tutorials</Link>
          <Link to='/'>How to- blog</Link>
          <Link to='/'>Youtube Playlist</Link>
         </div>
         </div>
         <div className='text-xs text-gray-700 mt-2'>
         LadyLuxe © 2000-2024, All Rights Reserved
         </div>
        </footer>
    </div>
   
    </>
  )
}

export default Footer