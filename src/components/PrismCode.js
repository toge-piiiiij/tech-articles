import React, { useRef, useEffect } from "react"
import Prism from "prismjs"


function PrismCode({ code, language }) {
    const codeBlock = useRef(null)

    useEffect(() => {
        highlight()
    })

    const highlight = () => {
        Prism.highlightElement(codeBlock.current)
    }
    return (
        <pre >
            <code ref={codeBlock} className={`language-${language}`}>
                {code.trim()}
            </code>
        </pre>
    )
}
export default PrismCode;