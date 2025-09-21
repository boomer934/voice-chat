"use client"
import React from 'react'
import Image from 'next/image'
export default function NavBar() {
  return (
    <div className='w-full h-16 shadow-md text-white flex items-center justify-between px-4'>
        <Image src={"/chatbot.avif"} alt='logo' width={60} height={60} className='rounded-full'/>
        <h1 className='text-2xl font-bold text-black'>Bibo Virtual Assistant</h1>
    </div>
  )
}
