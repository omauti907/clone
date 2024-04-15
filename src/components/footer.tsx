import React from 'react';
import rffooter from '@/assets/navbar/rffooter.svg'
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-10"> {/* Adjust px-10 if needed */}
        <div className="grid grid-cols-2 "> {/* Responsive grid */}
          <div className="text-center md:text-left">
            <Image src={rffooter} height={300} width={300} alt="Footer Logo" /> {/* Center image on smaller screens */}
          </div>
          <div className='grid md:grid-cols-3 gap-1 py-1 mt-10 ml-20 group '>
          <div className="text-center md:text-left"> 
            <h2 className="text-xl font-bold mb-6">Product</h2>
            <ul className="list-unstyled ">
              <li><button className='hover:text-purple-400' >Overview</button ></li>
              <li><button className='hover:text-purple-400'>Features</button ></li>
              <li><button className='hover:text-purple-400'>Pricing</button ></li>
              <li><button className='hover:text-purple-400'>Releases</button ></li>
              <li><button className='hover:text-purple-400'>Licenses</button ></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-6">Social</h2>
            <ul className="list-unstyled">
              <li><button className='hover:text-purple-400'>Twitter</button ></li>
              <li><button className='hover:text-purple-400'>Facebook</button ></li>
              <li><button className='hover:text-purple-400'>LinkedIn</button ></li>
              <li><button className='hover:text-purple-400'>Dribbble</button ></li>
              <li><button className='hover:text-purple-400'>AngelList</button ></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-6">Legal</h2>
            <ul className="list-unstyled">
              <li><button className='hover:text-purple-400'>Terms</button ></li>
              <li><button className='hover:text-purple-400'>Privacy</button ></li>
              <li><button className='hover:text-purple-400'>Cookies</button ></li>
              <li><button className='hover:text-purple-400'>Settings</button ></li>
              <li><button className='hover:text-purple-400'>Contact</button ></li>
            </ul>
          </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
