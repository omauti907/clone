import React from 'react';
import Image from 'next/image';
import google from '@/assets/navbar/google.svg'
import Link from 'next/link';
import apple from '@/assets/navbar/apple.svg'
import background from '@/assets/navbar/background.svg'


const Auth = () => {
  return (
    <div className="  h-screen w-full">
      <Image src={background} height={100} width={100} className=" absolute top-0 left-0" alt='background' />
      <div className="flex p-10 gap-8 ">
        <div className='mt-10 flex-1 h-[200px] w-[200] '>
            
            </div>
        <div className='flex-1 flex justify-center items-center flex-col gap-5 mt-10 mb-10'>
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
          <div className="mt-4 text-gray-500 text-center">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 hover:underline">Log in here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
