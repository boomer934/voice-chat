"use client"
import React from 'react'
import { SendIcon } from 'lucide-react'
export default function SearchBar() {
  return (
    <div className='flex flex-row'>
        <input type="text" name="search" className='bg-slate-200 rounded-xl m-3 p-1 outline-none'/>
        <button type="submit"><SendIcon /></button>
    </div>
  )
}
