"use client"
import Auth from '@/components/signup'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { NextUIProvider } from "@nextui-org/react";
const Home = () => {
  return (
    <div>
      <NextUIProvider>
        <Navbar />
      </NextUIProvider>

      <Auth />
      <Footer />
    </div>
  )
}

export default Home
