import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // ✅ Import this


const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const location = useLocation(); // ✅ Get current route

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let botReply = "I'm not sure I understand. Could you clarify?";

      if (input.toLowerCase().includes("price")) {
        botReply =
          "Our pricing depends on your project needs. Can you tell me more?";
      } else if (input.toLowerCase().includes("project")) {
        botReply =
          "We handle construction, interiors, and architecture projects.";
      } else if (input.toLowerCase().includes("contact")) {
        botReply =
          "You can contact us at support@sadhisha.com or call +91-99999-99999.";
      }

      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    }, 1000);

    setInput("");
  };

  // ✅ Hide the chatbot if user is on the full chat page
  if (location.pathname === "/chat") {
    return null;
  }

  return (
    <div
      className="position-fixed bottom-0 end-0 mb-3 me-3"
      style={{ zIndex: 1050 }}
    >
      {/* Floating Chat Button */}
      {!open && (
        <button
          className="btn btn-success rounded-circle shadow d-flex align-items-center justify-content-center"
          style={{ width: "60px", height: "60px", fontSize: "24px" }}
          onClick={() => setOpen(true)}
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          className="card shadow border-0 mt-2"
          style={{
            width: "320px",
            height: "420px",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
            <span>Chat with us</span>
            <button
              className="btn btn-sm btn-light"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>
          </div>

          <div
            className="card-body d-flex flex-column bg-light"
            style={{ overflowY: "auto", flex: 1 }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${
                  msg.from === "user" ? "text-end" : "text-start"
                }`}
              >
                <span
                  className={`d-inline-block p-2 rounded ${
                    msg.from === "user"
                      ? "bg-success text-white"
                      : "bg-white border"
                  }`}
                  style={{ maxWidth: "80%" }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="card-footer bg-white border-top p-2 d-flex">
            <input
              type="text"
              className="form-control me-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
            />
            <button className="btn btn-success" onClick={handleSend}>
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
