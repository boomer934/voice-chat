import axios from 'axios'
import React from 'react'
export async function handleSubmit(input:string,setInput:React.Dispatch<React.SetStateAction<string>>,messages:Array<{role:string,content:string}>,setMessages:React.Dispatch<React.SetStateAction<Array<{role:string,content:string}>>>,loading?:boolean,setLoading?:React.Dispatch<React.SetStateAction<boolean>>){
    setLoading && setLoading(true)
    if(!input)return
    try {
        const res = await axios.post("/api/chat",{
            message:input
        })
        setInput("")
        setMessages([...messages,{role:"user",content:input},{role:"assistant",content:res.data.reply}])
        setLoading && setLoading(false)
        return res.data
    } catch (error) {
        console.error(error);
    }finally{
        setLoading && setLoading(false)
    }
}