import { useState, useRef } from "react";
import "../App.css"

export default function Chat() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  let timeoutID = useRef();

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      alert("Sent!");
      setIsSending(false);
    }, 5000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID.current);
  }

  return (
    <div className="chat-container">
      <input
        className="chat-input"
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
      />
      <button
        className={`chat-button ${isSending ? "sending" : ""}`}
        disabled={isSending}
        onClick={handleSend}
      >
        {isSending ? "Sending..." : "Send"}
      </button>
      {isSending && (
        <button className="chat-undo" onClick={handleUndo}>
          Undo
        </button>
      )}
    </div>
  );
}
