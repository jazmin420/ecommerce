import { Button } from ''
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { app } from '../firebase';
// import { useDispatch } from 'react-redux';
// import { signInSuccess } from '../../redux/Slices/userSlice';
// import { useNavigate } from 'react-router-dom';

function OAuth() {
 
  const auth = getAuth(app)
  // const dispatch = useDispatch();
  // const navigate = useNavigate();


  
const handleGoogleClick  = async () => {
  const provider = new GoogleAuthProvider()
  //always option for selecting an acc
  provider.setCustomParameters({prompt: 'select_account'});
  try {
          const resultsFromGoogle = await signInWithPopup(auth, provider)
          console.log(resultsFromGoogle)
       } catch (error) {
           console.log(error);
       }
      
}
  return (
    <>
    <Button type='button' outline className='btn' onClick={handleGoogleClick}>
    <FcGoogle className='w-6 h-6 mr-2' />
    Continue with Google
    </Button>
    </>
  )
}

export default OAuth