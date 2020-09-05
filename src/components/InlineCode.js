import React, { useRef, useEffect } from "react"
import Prism from "prismjs"


function InlineCode({ language, children }) {
    const codeBlock = useRef(null)

    useEffect(() => {
        highlight()
    })

    const highlight = () => {
        Prism.highlightElement(codeBlock.current)
    }
    return (
        <code ref={codeBlock} className={`language-${language}`}>
            {children}
        </code>
    )
}
export default InlineCode;