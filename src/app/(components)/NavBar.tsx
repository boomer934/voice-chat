"use client"
import React, { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import SideBar from './SideBar'
export default function NavBar() {
    const [isOpen,setIsOpen] = useState<boolean>(false)
  return (
    <div className='w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4'>
        <h2>LOGO</h2>
        <MenuIcon
        onClick={()=>setIsOpen(prev=>!prev)}
        className='w-6 h-6'/>
        {isOpen && (
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        )}
    </div>
  )
}
