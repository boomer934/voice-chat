import axios from 'axios'
import React from 'react'
export async function handleSubmit(input:string,setOutput:React.Dispatch<React.SetStateAction<string>>){
    try {
        const res = await axios.post("/api/chat",{
            message:input
        })
        setOutput(res.data.reply)
        return res.data
    } catch (error) {
        console.error(error);
    }
}