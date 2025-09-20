"use client"
import React, { useEffect } from 'react'
import { SendIcon } from 'lucide-react'
import { handleSubmit } from '../(handlers)/functions'
import type { SearchBarProps } from '../(handlers)/types'

export default function SearchBar({input,setInput,outPut,setOutput}:SearchBarProps) {
  return (
    <div className='flex flex-row'>
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={(e)=>{if(e.key==="Enter")handleSubmit(input,setOutput)}}
        type="text" 
        name="search" 
        className='bg-slate-200 rounded-xl m-3 p-1 outline-none'/>
        <button 
        type="submit"
        onClick={()=>handleSubmit(input,setOutput)}>
            <SendIcon />
        </button>
    </div>
  )
}
