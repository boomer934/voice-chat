"use client"
import React ,{ useEffect, useRef, useState }from 'react'
import SearchBar from './SearchBar'
import Image from 'next/image'
import TypeSpeed from './TypeSpeed'


export default function Chat() {
  const [input, setInput] = useState<string>("")
  const [messages, setMessages] = useState<Array<{role:string,content:string,loading:boolean}>>([])
  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    if(ref.current){
      ref.current.scrollIntoView({behavior:"smooth"})
    }
  },[messages])
  return (
    <div className='flex flex-col items-center justify-end  w-full h-full p-3 overflow-y-auto'>
    <div className='w-full flex-1'>
      <div className="flex flex-col w-full h-full ">
        {messages.length === 0 &&(
          <div className='flex flex-col gap-5 flex-1 justify-center items-center w-full'>
            <Image src="/chatbot.avif" alt="logo" width={200} height={200} className="shadow-md rounded-full" />
            <TypeSpeed text="Benvenuto su Bibo Virtual Assistant" speed={100} typeFontText='title' />
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col m-2 gap-2 ${
              msg.role === "user"
                ? "self-end bg-slate-200 rounded-2xl py-1 px-2 break-words max-w-[70%]"
                : "self-start"
            }`}
          >
            {/* Avatar dell'assistant */}
            {msg.role === "assistant" && !msg.loading && (
              <Image
                src="/chatbot.avif"
                alt="logo"
                width={35}
                height={35}
                className="rounded-full shadow-md mb-1"
              />
            )}

            {/* Loader o contenuto */}
            {msg.loading ? (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-200 rounded-full animate-pulse"></div>
                <div className="h-7 w-32 bg-slate-200 animate-pulse rounded-xl"></div>
              </div>
            ) : msg.role === "assistant" ? (
              <TypeSpeed text={msg.content} speed={20} typeFontText='paragraph' />
            ):(
              <p>{msg.content}</p>
            )}
          </div>
        ))}
      </div>

      </div>
        <div ref={ref}></div>
        <SearchBar input={input} setInput={setInput} messages={messages} setMessages={setMessages}/>
    </div>
  )
}
