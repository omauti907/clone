import React from 'react';
import Image from 'next/image';
import google from '@/assets/navbar/google.svg'
import Link from 'next/link';
import apple from '@/assets/navbar/apple.svg'
import frame from '@/assets/navbar/imgframe.svg'


const Auth = () => {
  return (
    <div className="  h-screen w-full">
     
      <div className="flex justify-center items-center w-full h-full pl-[200px] ">
        <div >
            <Image src={frame} height={469} width={642} alt='frame'/>
            </div>
            
        <div className='flex-1 flex justify-center items-center flex-col gap-5  w-full h-full'>
          
          <h1 className="text-4xl text-left font-bold ">Sign up / Register</h1>
          <button className="bg-black hover:bg-gray-700 text-white p-3 w-80 rounded-xl border border-gray-500" >
            <div className='flex space-x-1 gap-6 justify-center'>
            <Image src={google} height={37} width={37} alt='google logo'/>
              <div className="mt-1">
                Log in with Google
              </div>
            </div>
          </button>
          <button className="bg-black hover:bg-gray-700 text-white p-3 w-80 rounded-xl border border-gray-500" >
            <div className='flex space-x-1 gap-6 justify-center'>
            <Image src={apple} height={30} width={30} alt='google logo'/>
              <div className="mt-1">
                Log in with Apple
              </div>
            </div>
          </button>
          
          </div>
        </div>
      </div>
  
  );
};

export default Auth;
