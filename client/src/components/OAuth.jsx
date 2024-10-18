import { Button } from '@material-tailwind/react'
import React from 'react'
import { FcGoogle } from "react-icons/fc";

function OAuth() {

  const handleGoogleClick = async () => {

  }
  return (
   <>
   <div className='w-full my-3'>
     <Button className='flex items-center justify-center gap-2 hover:bg-black hover:text-white' variant="outlined" fullWidth onClick={handleGoogleClick}>
      Continue With Google
      <FcGoogle className='w-4 h-4'/>
     </Button>
   </div>
   </>
  )
}

export default OAuth