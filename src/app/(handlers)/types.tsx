export type IsOpenState = {
    isOpen:boolean,
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export type Message={
    role:string,
    content:string,
    loading:boolean
}

export type SearchBarProps = {
    input:string,
    setInput:React.Dispatch<React.SetStateAction<string>>,
    messages:Message[],
    setMessages:React.Dispatch<React.SetStateAction<Message[]>>,
}