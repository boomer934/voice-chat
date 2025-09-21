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

  // Trasformiamo <br> in line break Markdown
  const formattedText = typeText.replace(/<br\s*\/?>/gi, '  \n')

  return (
    <div className={`whitespace-pre-wrap ${typeFontText === "title" ? "font-bold text-xl" : "font-normal"}`}>
        <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        skipHtml={false}
        components={{
            table: ({ children, ...props }) => (
            <table {...props} className="border border-gray-300 rounded-lg border-separate border-spacing-2 overflow-hidden">
                {children}
            </table>
            ),
            td: ({ children, ...props }) => (
            <td {...props} className="p-2 border border-gray-300">
                {React.Children.map(children, (child) => {
                if (typeof child === "string") {
                    return child.split('  \n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                    ))
                }
                return child
                })}
            </td>
            ),
            th: ({ children, ...props }) => (
            <th {...props} className="p-2 border border-gray-300 bg-gray-100 font-bold">
                {children}
            </th>
            ),
        }}
        >
        {formattedText}
        </ReactMarkdown>

    </div>
  )
}
