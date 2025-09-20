import axios from 'axios'

export async function handleSubmit(input:string){
    try {
        const res = await axios.post("/api/chat",{
            message:input
        })
        return res.data
    } catch (error) {
        console.error(error);
    }
}