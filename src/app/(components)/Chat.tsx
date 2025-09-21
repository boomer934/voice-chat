"use client"
import React ,{ useState }from 'react'
import SearchBar from './SearchBar'


export default function Chat() {
  const [input, setInput] = useState<string>("")
  const [outPut, setOutput] = useState<string>("")
  const [messages, setMessages] = useState<Array<{role:string,content:string}>>([])
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className='flex flex-col items-center justify-end  w-full h-full p-3 overflow-y-auto'>
      <div className='w-full flex-1 h-100'>
        {loading ?(
          <div className='flex flex-col w-full'>
            <div className=' h-7 w-[100px] animate-pulse bg-slate-200 odd:self-end rounded-xl'></div>
            <div className=' h-20 w-35 animate-pulse bg-slate-200 even:self-start rounded-xl '></div>
          </div>
        ):(
          <div className='flex flex-col w-full'>
            {messages.map((msg,i)=>(
              <div className={`flex flex-col m-2 ${msg.role === "user" ? "self-end bg-slate-200 rounded-2xl py-1 px-2" : "self-start"}`} key={i}>
                <p key={i}>{msg.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
        
        <SearchBar input={input} setInput={setInput} messages={messages} setMessages={setMessages} loading={loading} setLoading={setLoading}/>
    </div>
  )
}
