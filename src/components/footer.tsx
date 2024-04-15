import React from "react";
import rffooter from "@/assets/navbar/rffooter.svg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-10">
        {" "}
        {/* Adjust px-10 if needed */}
        <div className="grid grid-cols-2 ">
          {" "}
          {/* Responsive grid */}
          <div className="text-center md:text-left">
            <Image src={rffooter} height={300} width={300} alt="Footer Logo" />{" "}
            {/* Center image on smaller screens */}
          </div>
          <div className="grid md:grid-cols-2 gap-1 py-1 mt-10 ml-20 group ">
            {/* <div className="text-center md:text-left">  */}
            {/* <h2 className="text-xl font-bold mb-6">Product</h2>
            <ul className="list-unstyled ">
              <li><Link  className='hover:text-purple-400' >Overview</Link  ></li>
              <li><Link  className='hover:text-purple-400'>Features</Link  ></li>
              <li><Link  className='hover:text-purple-400'>Pricing</Link  ></li>
              <li><Link  className='hover:text-purple-400'>Releases</Link  ></li>
              <li><Link  className='hover:text-purple-400'>Licenses</Link  ></li>
            </ul>
          </div> */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold mb-6">Social</h2>
              <ul className="list-unstyled">
                <li>
                  <Link target="" href={"https://twitter.com/RainforestAI"} className="hover:text-purple-400">Twitter</Link>
                </li>
                <li>
                  <Link target="" href={"https://www.facebook.com/RainforestAi"} className="hover:text-purple-400">Facebook</Link>
                </li>
                <li>
                  <Link target="" href={"https://www.linkedin.com/company/chitraai/?viewAsMember=true"} className="hover:text-purple-400">LinkedIn</Link>
                </li>
                <li>
                  <Link target="" href={"https://www.instagram.com/rainforest.zone/"}className="hover:text-purple-400">Instagram</Link>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold mb-6">Legal</h2>
              <ul className="list-unstyled">
                {/* <li><Link  className='hover:text-purple-400'>Terms</Link  ></li>
              <li><Link  className='hover:text-purple-400'>Privacy</Link  ></li>
              <li><Link  className='hover:text-purple-400'>Cookies</Link  ></li>
              <li><Link  className='hover:text-purple-400'>Settings</Link  ></li> */}
                <li>
                  {/* <Link className="hover:text-purple-400">Contact</Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
