import React from 'react'
import logo from '../assets/logo.png'
import { Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Badge } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link, useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin')
  return (
    <>
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex justify-between items-center px-4'>
        <div className=''>
          <Link to='/'>
          <img className='w-[200px]' src={logo} alt="ecommerce logo" />
          </Link>
        </div>
        { !isAdminRoute && (
          <>
            <div className="hidden lg:flex w-72">
              <Input icon={<FaSearch/>} label="Search for products here" />
            </div>
            <div className='flex justify-end text-2xl items-center cursor-pointer gap-x-4'>
              <FaRegHeart /> 
            <Badge content="5">
              <FaCartPlus />
            </Badge>
              <div className='flex justify-end'>
                <FaUserCircle className='text-3xl'/>
              </div>
              <div>
            <Link to='/sign-in'>
              <Button variant='filled'
              className='rounded hover:bg-blue-gray-900'
              >
                Sign In
              </Button>
            </Link>
            </div>
            </div>
          </>
        )}
      </div>
    </header>
    </>
  )
}

export default Header