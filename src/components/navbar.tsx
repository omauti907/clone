import React from 'react';

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import logoimage from '@/assets/navbar/logo.svg'
import onlya from '@/assets/navbar/onlya.svg'
import icon from '@/assets/navbar/searchicon.svg'
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-1 border-b border-gray-600">
      <div className="flex justify-between items-center">
        <div className="flex space-x-1 text-2xl font-bold ml-200 "><Image src={logoimage} height={100} width={100} alt='logo' />
          <div className='flex justify-between items-center mt-4 mr-101'><Image src={onlya} height={500} width={500} alt='logo' /></div></div>
        <div className="flex space-x-7 text-white">
          <button className="px-4 py-2 rounded">Feed</button>
          <button className="px-4 py-2 rounded">Competitions</button>
          <button className="px-4 py-2 rounded-xl bg-white text-purple-600">Log In</button>
          <div className="relative inline-block text-left">
            <div>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                  >
                    Open Menu
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem key="delete" className="text-danger" color="danger">
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>


          </div>




          <button className="px-4 py-2 rounded-xl"><Image src={icon} height={30} width={30} alt='logo' /></button>
        </div>
      </div>

    </nav >
  );
};

export default Navbar;