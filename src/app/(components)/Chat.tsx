"use client"
import React ,{ useState }from 'react'
import SearchBar from './SearchBar'


export default function Chat() {
  const [input, setInput] = useState<string>("")
  const [outPut, setOutput] = useState<string>("")
  return (
    <div className='flex flex-col items-center justify-end bg-amber-300 w-full h-full p-3 overflow-y-auto'>
        <SearchBar input={input} setInput={setInput} outPut={outPut} setOutput={setOutput}/>
        {outPut && (
          <div>
            <p>{input}</p>
            <p>{outPut}</p>
          </div>
        )}
    </div>
  )
}
