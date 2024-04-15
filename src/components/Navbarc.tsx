import Link from "next/link";
import logoimage from "@/assets/navbar/logo.svg";
import onlya from "@/assets/navbar/onlya.svg";
import icon from "@/assets/navbar/searchicon.svg";
import Image from "next/image";
import appstore from "@/assets/navbar/appstore.svg";



const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10">
      <div className="w-full">
        <div className="max-w-screen-2xl mx-auto px-2 py-2">
          <nav className="flex justify-between items-center">
            <div className="flex space-x-1 text-2xl font-bold ml-200 ">
              <Image src={logoimage} height={100} width={100} alt="logo" />
              <div className="flex justify-between items-center mt-1 mr-101">
                <Image src={onlya} height={300} width={300} alt="logo" />
              </div>
            </div>

            <div className="flex gap-12 mt-4 text-white text-base font-light lg:text-lg">
              <Link href={"/"}>Feed</Link>
              <Link href={"/"}>Competitions</Link>
              <Link href={"/"}>Contact Us</Link>
              <button className="w-40 h-10  border-1 border-gray-100 text-white bg-purple-700 rounded-xl ">
                Login
              </button>
              <div>
                
              </div>
              <button className="px-4  rounded-xl">
                <Image src={icon} height={30} width={30} alt="logo" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
