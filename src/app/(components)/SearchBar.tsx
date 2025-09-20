"use client"
import React,{ Key, useState } from 'react'
import { SendIcon } from 'lucide-react'
import { handleSubmit } from '../(handlers)/functions'
export default function SearchBar() {
    const [input, setInput] = useState<string>("")
  return (
    <div className='flex flex-row'>
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={(e)=>{if(e.key==="Enter")handleSubmit(input)}}
        type="text" 
        name="search" 
        className='bg-slate-200 rounded-xl m-3 p-1 outline-none'/>
        <button 
        type="submit"
        onClick={()=>handleSubmit(input)}>
            <SendIcon />
        </button>
    </div>
  )
}
