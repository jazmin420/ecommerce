import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from "@material-tailwind/react";
import OAuth from '../components/OAuth'
import { signInUser } from "../redux/slices/userSlice";

function SignIn() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange =  (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
   }
   //console.log(formData);

   const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    
    if (!email || !password) {
      toast.error('please fill all the fields');
      return;
    }
    try {
      const data = await dispatch(signInUser(formData)).unwrap();
      toast.dismiss();
      toast.success('Sign In successful');
      setTimeout(() => {
        navigate('/shop/home');
      }, 1500);
    } catch (error) {
      toast.error(error);
    }
   }

  return (
    <>
      <div className="flex justify-center items-center my-5">
        <Card color="transparent" shadow={true} className="border p-5 bg-white">
          <Typography variant="h4" color="blue-gray" className="text-center">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Sign In to Your Account
          </Typography>
          <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography>
              <Input

                id="email"
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={handleChange}
                required
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                icon={
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                }
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="mt-6 hover:bg-gray-800" fullWidth disabled={loading}>
            {loading ? (
                <>
                  <Spinner className="h-4 w-4" />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            <OAuth/>
            <Typography color="gray" className=" font-normal text-sm mt-1">
              <Link to={'/forgot-password'} className="text-blue-300 underline">
                Forgot Password?
              </Link>{" "} or 
              <Link to="/sign-up" className="font-medium text-blue-300 underline">
               {" "}sign up
              </Link>
              {" "}if you don't have an account
            </Typography>
          </form>
        </Card>
      </div>
      <ToastContainer/>
    </>
  );
}

export default SignIn;
