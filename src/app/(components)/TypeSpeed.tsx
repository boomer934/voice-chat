"use client"
import React, { useEffect, useState, ReactNode } from 'react'
import { TextProps } from '../(handlers)/types'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function TypeSpeed({ text, speed, typeFontText }: TextProps) {
  const [typeText, setTypeText] = useState<string>("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTypeText(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  const formattedText = typeText.replace(/<br\s*\/?>/gi, '  \n')

  return (
    <div className={`whitespace-pre-wrap ${typeFontText === "title" ? "font-bold text-xl" : "font-normal"} max-w-full overflow-hidden`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        skipHtml={false}
        components={{
          table: ({ children, ...props }) => (
            <div className='max-w-full overflow-x-auto border border-gray-300 rounded-lg mb-4' style={{width: '100%', maxWidth: '100%'}}>
              <table
                {...props}
                className="border-separate border-spacing-2 min-w-full"
                style={{minWidth: '600px'}}
              >
                {children}
              </table>
            </div>
          ),
          td: ({ children, ...props }) => (
            <td
              {...props}
              className="p-2 border border-gray-300 break-words min-w-[120px]"
            >
              {React.Children.map(children, (child) => {
                if (typeof child === "string") {
                  return child.split('  \n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < child.split('  \n').length - 1 && <br />}
                    </React.Fragment>
                  ))
                }
                return child
              })}
            </td>
          ),
          th: ({ children, ...props }) => (
            <th
              {...props}
              className="p-2 border border-gray-300 bg-gray-100 font-bold break-words min-w-[120px]"
            >
              {children}
            </th>
          ),
          // Gestione dei paragrafi per evitare overflow
          p: ({ children, ...props }) => (
            <p
              {...props}
              className="break-words max-w-full"
            >
              {children}
            </p>
          ),
          // Gestione del codice inline
          code: ({ children, ...props }) => (
            <code
              {...props}
              className="break-all bg-gray-100 px-1 py-0.5 rounded"
            >
              {children}
            </code>
          ),
          // Gestione dei blocchi di codice
          pre: ({ children, ...props }) => (
            <pre
              {...props}
              className="overflow-x-auto max-w-full bg-gray-100 p-3 rounded-lg whitespace-pre"
            >
              {children}
            </pre>
          ),
        }}
      >
        {formattedText}
      </ReactMarkdown>
    </div>
  )
}