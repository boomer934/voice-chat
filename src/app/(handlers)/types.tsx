export type IsOpenState = {
    isOpen:boolean,
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}
export type SearchBarProps = {
    input:string,
    setInput:React.Dispatch<React.SetStateAction<string>>,
    outPut:string,
    setOutput:React.Dispatch<React.SetStateAction<string>>
}