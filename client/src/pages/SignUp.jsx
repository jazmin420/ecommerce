import React, { useRef, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Spinner
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import userIcon from '../assets/userIcon.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import OAuth from "../components/OAuth";

function SignUp() {

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [imageFile, setImageFile] = useState(null)
  const [imageFileUrl, setImageFileUrl] = useState(null);

  const filePickerRef = useRef();
  const navigate = useNavigate();


  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0 ]
    if(file){
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  }
  //console.log(imageFile, imageFileUrl);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
  });


  const onSubmit = async (data) => {

    const formData = {
      ...data,
      profilePicture: imageFileUrl,
    };
    console.log(formData);
  
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const responseData = await res.json();
      //console.log('Response Data:', responseData);
  
      if (res.status === 400) {
        toast.error(responseData.message || 'Bad Request');
        return;
      }
  
      if (responseData.success === false) {
        toast.error(responseData.message);
        return;
      }
      setLoading(false);

      if (res.ok) {
        toast.success('Registered successfully! Redirecting to sign-in...');
        setTimeout(() => {
          navigate('/sign-in');
        }, 1500);
      }
    } catch (error) {
      //console.error('Error:', error.message);
      toast.error('An error occurred: ' + error.message);
      setLoading(false);
    }
   };
  

  return (
    <>
      <div className="flex items-center justify-center my-4">
        <Card color="transparent" shadow={true} className="border px-5 py-2 bg-white">
          <Typography variant="h4" color="blue-gray" className="text-center">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-2 w-80 max-w-screen-lg sm:w-96">
            <input className="hidden" type="file" accept='image/*' onChange={handleImageChange} ref={filePickerRef} />
            <div className="mb-1 flex flex-col">
              <div className="flex items-center justify-center cursor-pointer" onClick={() => filePickerRef.current.click()}>
                <img className="rounded-full w-16 h-16 border-2 border-gray-600" src={imageFileUrl || userIcon} alt="" />
              </div>
              <Typography variant="h6" color="blue-gray" className="">
                Username
              </Typography>
              <Controller
              name="username"
              rules={{
                required: "Username is Required",
                minLength: {
                  value: 5,
                  message: "Minimum 5 characters required",
                },
              }}
              control={control}
              render={({ field }) => (
              <Input
              {...field}
                error={Boolean(errors?.username?.message)}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            )}
            />
            {errors?.username?.message && (
              <span className="text-red-800">{errors?.username?.message}</span>
            )}
              <Typography variant="h6" color="blue-gray" className="">
                Email
              </Typography>
              <Controller
              name="email"
              control={control}
              rules={{
                required: "Email ID is Required",
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "Email ID is invaild",
                },
              }}
              render={({ field }) => (
              <Input
              {...field}
                  error={Boolean(errors?.email?.message)}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            )}
            />
            {errors?.email?.message && (
              <span className="text-red-800">{errors?.email?.message}</span>
            )}
              <Typography variant="h6" color="blue-gray" className="">
                Password
              </Typography>
              <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is Required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,30}$/,
                  message: `Password not strong enough!!
                  Include of uppercase and lowercase letters, digits & special chars, 6 - 30 chars.`,
                },
              }}
              render={({ field }) => (
              <Input
              {...field}
              error={Boolean(errors?.password?.message)}
              icon={
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              }
              type={showPassword ? "text" : "password"}
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            )}
            />
            {errors?.password?.message && (
              <span className="text-red-800">{errors?.password?.message}</span>
            )}
            </div>
            <Checkbox
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button type="submit" className="mt-3 hover:bg-blue-gray-900" fullWidth disabled={!isCheckboxChecked || loading}>
            {loading ? (
                <>
                  <Spinner size='h-4 w-4' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
            <OAuth/>
            <Typography color="gray" className="font-normal">
              Already have an account?{" "}
              <Link to="/sign-in" className="font-medium text-gray-900">
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
}

export default SignUp;
