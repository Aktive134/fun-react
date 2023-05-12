import React, { useState, useRef } from 'react'

function ChatPrac() {
  const [isSending, setIsSending] = useState(false)
  const [text, setText] = useState('')
  const timeoutID = useRef()

  const handleSend = () => {
    setIsSending(true)
    timeoutID.current = setTimeout(() => {
      alert('message sent')
      setIsSending(false)
    }, 5000)
  }

  const handleUndo = () => {
      setIsSending(false)
      clearTimeout(timeoutID.current)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="send a message"
        value={text}
        disabled={isSending}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSend}
        disabled={isSending}
      >{isSending ? "sending..." : "send"}</button>

      {isSending && <button onClick={handleUndo}>undo</button>}
    </div>
  )
}

export default ChatPrac
