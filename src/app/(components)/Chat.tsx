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
    <>
    <div className='flex flex-col w-full h-full p-3 pt-20 pb-20 overflow-y-auto overflow-x-hidden'>
      {/* Contenuto della chat */}
      <div className='w-full flex-1 max-w-lg mx-auto min-w-0'>
        <div className="flex flex-col w-full h-full min-w-0">
          {messages.length === 0 &&(
            <div className='flex flex-col gap-5 flex-1 justify-center items-center w-full'>
              <Image src="/chatbot.avif" alt="logo" width={200} height={200} className="shadow-md rounded-full" />
              <TypeSpeed text="Benvenuto su Bibo Virtual Assistant" speed={100} typeFontText='title' />
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col m-2 gap-2 min-w-0 ${
                msg.role === "user"
                  ? "self-end bg-slate-200 rounded-2xl py-1 px-2 break-words max-w-[70%] lg:max-w-[50%]"
                  : "self-start max-w-full"
              }`}
            >
              {/* Avatar dell'assistant */}
              {msg.role === "assistant" && !msg.loading && (
                <Image
                  src="/chatbot.avif"
                  alt="logo"
                  width={35}
                  height={35}
                  className="rounded-full shadow-md mb-1 flex-shrink-0"
                />
              )}

              {/* Loader o contenuto */}
              {msg.loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-200 rounded-full animate-pulse"></div>
                  <div className="h-7 w-32 bg-slate-200 animate-pulse rounded-xl"></div>
                </div>
              ) : msg.role === "assistant" ? (
                <div className="min-w-0 max-w-full overflow-hidden">
                  <TypeSpeed text={msg.content} speed={20} typeFontText='paragraph' />
                </div>
              ):(
                <p className="break-words">{msg.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div ref={ref}></div>
      </div>
      <SearchBar input={input} setInput={setInput} messages={messages} setMessages={setMessages}/>
  </>)
}