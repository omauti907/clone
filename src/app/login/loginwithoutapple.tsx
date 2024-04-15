import React from 'react';
import Image from 'next/image';
import google from '@/assets/navbar/google.svg';

const Auth = () => {
  return (
    <div className="h-screen  flex  justify-center items-center ">
      <div className="w-full max-w-md px-6 justify-center items-center">
    
        <h1 className="text-4xl  font-bold ml-11 mb-8 text-white ">Sign up / Register</h1>
        <button className="bg-[#09090B] hover:bg-gray-700 text-white py-3 px-8 w-full rounded-xl border border-gray-500 mb-6">
          <div className="flex items-center justify-center space-x-2">
            <Image src={google} height={30} width={30} alt="google logo" />
            <span>Log in with Google</span>
          </div>
        </button>
        
      </div>
    </div>
  );
};

export default Auth;
