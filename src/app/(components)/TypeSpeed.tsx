"use client"
import React, { useEffect,useState } from 'react'
import { TextProps } from '../(handlers)/types'
import ReactMarkdown from 'react-markdown'

export default function TypeSpeed({text,speed,typeFontText}:TextProps) {
    const [typeText,setTypeText] = useState<string>("")
    useEffect(()=>{
        let i = 0
        const interval = setInterval(()=>{
        setTypeText(text.slice(0,i+1))
        i++
        if(i===text.length){
        clearInterval(interval)
        }
        },speed)
    },[text,speed])
    return (
    <div className={`whitespace-pre-wrap ${typeFontText === "title" ? "font-bold text-xl" : "font-normal"}`}>
        <ReactMarkdown>{typeText}</ReactMarkdown>
    </div>

  )
}
