"use client"
import Auth from '@/app/login/loginwithoutapple'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { NextUIProvider } from "@nextui-org/react";
const Home = () => {
  return (
    <div>
       <div className="relative h-full w-full bg-slate-950 flex flex-col gap-4">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <Navbar/>
            <Auth/>
            
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
          <Footer/>
    </div>
  )
}

export default Home
