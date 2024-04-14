import React from 'react';
import playstore from '@/assets/navbar/playstore.svg'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Radio, RadioGroup } from "@nextui-org/react";
import logoimage from '@/assets/navbar/logo.svg'
import onlya from '@/assets/navbar/onlya.svg'
import icon from '@/assets/navbar/searchicon.svg'
import Image from 'next/image';
import appstore from '@/assets/navbar/appstore.svg'

const Navbar = () => {
  const [selectedColor, setSelectedColor] = React.useState("default")


  const DropdownContent = () => (
    <Dropdown className="bg-purple-700" shouldBlockScroll={false}>
      <DropdownTrigger>
        <Button className='w-40 border-1 text-white bg-purple-700'

        >
          Get App
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown Variants"
        color={"secondary"}
        variant={"faded"}
        className="   rounded-xl text-white capitalize w-40 hover:bg-black "

      >
        <DropdownItem >
          <div className="flex space-x-1 gap-2 mt-2">
            <Image src={playstore} height={30} width={30} alt='playstore logo' />
            <div>Play Store</div>
          </div>

        </DropdownItem>
        <DropdownItem >
          <div className="flex space-x-1 gap-3 mt-2">
            <Image src={appstore} height={30} width={30} alt='playstore logo' />
            <div>App Store</div>
          </div>

        </DropdownItem>

      </DropdownMenu>
    </Dropdown>
  )
  return (
    <nav className=" text-white p-1 border-b border-gray-600 rounded-md">
      <div className="flex justify-between items-center" style={{
        background: "rgba(62, 56, 56, 0.1)"
      }}>
        <div className="flex space-x-1 text-2xl font-bold ml-200 "><Image src={logoimage} height={100} width={100} alt='logo' />
          <div className='flex justify-between items-center mt-4 mr-101'><Image src={onlya} height={500} width={500} alt='logo' /></div></div>
        <div className="flex space-x-7 text-white">
          <button className="px-4 py-2 rounded">Feed</button>
          <button className="px-4 py-2 rounded">Competitions</button>
          <button className="px-4 py-2 rounded-xl bg-white text-purple-600">Log In</button>
          <div>
            <div className=" ">

              <DropdownContent />

              <RadioGroup

                orientation="horizontal"

                defaultValue="secondary"
                onValueChange={setSelectedColor}
              >


              </RadioGroup>
            </div>





          </div>




          <button className="px-4 py-2 rounded-xl"><Image src={icon} height={30} width={30} alt='logo' /></button>
        </div>
      </div>

    </nav >
  );
};

export default Navbar;




/* White background */

//

// position: absolute;
// width: 1439px;
// height: 80px;
// left: 0px;
// top: 0px;

// /* Card Color */

// /* Card Stroke */
// border: 1px solid rgba(255, 255, 255, 0.1);
// backdrop-filter: blur(52.5px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 6px;
