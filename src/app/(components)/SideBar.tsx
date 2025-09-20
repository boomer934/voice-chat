import React, { useRef } from 'react'
import type { IsOpenState } from '../(handlers)/types'
import { X } from 'lucide-react'
import "../globals.css"
export default function SideBar({isOpen,setIsOpen}:IsOpenState) {
    const ref = useRef<HTMLDivElement>(null);
    function closeSlide(){
        if(ref.current){
            ref.current.classList.remove('slide-in');
            ref.current.classList.add('slide-out');
        }
    }
  return (
    <div
    ref={ref}
    className={`fixed top-0 right-0 w-55 h-full bg-gray-900 text-white p-4 ${isOpen ? 'slide-in' : 'slide-out'}`}>
        <X 
        onClick={()=>{
            setTimeout(()=>{
                setIsOpen(prev=>!prev)
            },200)
            closeSlide()   
        }}
        className='absolute top-0 left-0 m-4'/>
    </div>
  )
}
