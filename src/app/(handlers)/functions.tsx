import axios from 'axios'
import { Message } from './types'
import React from 'react'

export async function handleSubmit(
  input: string,
  setInput: React.Dispatch<React.SetStateAction<string>>,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) {
  if (!input) return
    // Aggiungi messaggio utente
  setMessages(prev => [...prev, { role: "user", content: input, loading: false }])

  // Aggiungi messaggio IA in loading
  setMessages(prev => [...prev, { role: "assistant", content: "", loading: true }])

  try {
    const res = await axios.post("/api/chat", { message: input })
    setInput("")

    // Aggiorna l’ultimo messaggio (il loader) con la risposta reale
    setMessages(prev =>
      prev.map((msg, i) =>
        i === prev.length - 1 ? { ...msg, content: res.data.reply, loading: false } : msg
      )
    )

    return res.data
  } catch (error) {
    console.error(error)
    // In caso di errore, aggiorna il loader con un messaggio di errore
    setMessages(prev =>
      prev.map((msg, i) =>
        i === prev.length - 1 ? { ...msg, content: "Errore nella risposta", loading: false } : msg
      )
    )
  }
}
