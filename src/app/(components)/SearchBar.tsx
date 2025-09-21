"use client"
import React from 'react'
import { SendIcon } from 'lucide-react'

import { handleSubmit } from '../(handlers)/functions'
import type { SearchBarProps } from '../(handlers)/types'

export default function SearchBar({input,setInput,messages,setMessages}:SearchBarProps) {
  return (
    <div className='flex flex-row'>
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={(e)=>{if(e.key==="Enter")handleSubmit(input,setInput,setMessages)}}
        type="text" 
        name="search" 
        className='bg-slate-200 rounded-xl m-3 p-1 outline-none'/>
        {/* <button onClick={()=>createTranscription()}><MicIcon /></button> */}
        <button 
        type="submit"
        onClick={()=>handleSubmit(input,setInput,setMessages)}>
            <SendIcon />
        </button>
    </div>
  )
}
