import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import logo from "@/assets/navbar/logo.svg";
import SearchIcon from "@/assets/navbar/searchicon.svg";
import Image from "next/image.js";
import onlya from "@/assets/navbar/onlya.svg";


export default function App() {
  return (
    <Navbar isBordered className="sticky top-0 z-10 bg-transparent">
      <NavbarContent as="div" className="flex-1 items-center" justify="end">
        <Image src={logo} height={100} width={101} alt="main logo" />
        <Image src={onlya} height={600} width={600} alt="logo" />

        <div className="">
          <Link>Feed</Link>
        </div>
        <div>
          <Link>Competitions</Link>
      </div>
          <div>
            <Link>
              <button>Contact Us</button>
            </Link>
          </div>
       
    

      
        <Dropdown>
          <DropdownTrigger>
            <Input
              classNames={{
                
                base: "max-w-full sm:max-w-20 h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Get App"
              size="sm"
              type="search"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
