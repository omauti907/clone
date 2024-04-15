import React from "react";
import playstore from "@/assets/navbar/playstore.svg";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  RadioGroup,
} from "@nextui-org/react";
import logoimage from "@/assets/navbar/logo.svg";
import onlya from "@/assets/navbar/onlya.svg";
import icon from "@/assets/navbar/searchicon.svg";
import Image from "next/image";
import appstore from "@/assets/navbar/appstore.svg";

const Navbar = () => {
  const [selectedColor, setSelectedColor] = React.useState("default");

  const DropdownContent = () => (
    <Dropdown className="bg-purple-700" shouldBlockScroll={false}>
      <DropdownTrigger>
        <Button className="flex px-2 py-2 mt-2 mb-2 rounded-xl w-40 border-1 bg-purple-100 text-purple-600">
          Get App
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        
        color={"secondary"}
        variant={"faded"}
        className="   rounded-lg text-white capitalize w-40  "
      >
        <DropdownItem className='hover:bg-purple-200 rounded-lg'>
          
            <button className="flex space-x-2">
            <div className="flex space-x-2 gap-2 mt-2">
            <Image
              src={playstore}
              height={30}
              width={30}
              alt="playstore logo"
            />
            <div>Play Store</div>
            </div>
            </button>
            
          
        </DropdownItem>
        <DropdownItem>
          <button>
          <div className="flex space-x-1 gap-3 mt-2">
            <Image src={appstore} height={30} width={30} alt="playstore logo" />
            <div>App Store</div>
          </div>
          </button>
          
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
  return (
    <nav className=" text-white  border-b border-gray-600 rounded-md top-0 z-10 backdrop:blur-lg" >
      <div>
      <div 
        className="flex justify-between items-center"
        style={{
          background: "rgba(62, 56, 56, 0.1)",
        }}
      >
        <div className="flex space-x-1 text-2xl font-bold ml-200 ">
          <Image src={logoimage} height={100} width={100} alt="logo" />
          <div className="flex justify-between items-center mt-4 mr-101">
            <Image src={onlya} height={500} width={500} alt="logo" />
          </div>
        </div>
        <div className="flex space-x-4 mr-2 justify-center items-center text-white whitespace-nowrap">
          <button className="px-4 py-2 rounded">Feed</button>
          <button className="px-4 py-2 rounded">Competitions</button>
          <button className="px-4 py-2 rounded">Contact Us</button>
          <button className="px-4 py-2 rounded-xl w-40 border-1  bg-purple-100 text-purple-600">
            <p>Log In</p>
            
          </button>
          <div>
            <div className=" ">
              <DropdownContent />

              <RadioGroup
                orientation="horizontal"
                defaultValue="secondary"
                onValueChange={setSelectedColor}
              ></RadioGroup>
            </div>
          </div>
          
        </div>
      </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
