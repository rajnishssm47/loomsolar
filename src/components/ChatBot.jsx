
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sun,
  ArrowUpRight,
} from "lucide-react";

const quickQuestions = [
  "Solar Products",
  "Residential Solar",
  "Commercial Solar",
  "Industrial Solar",
  "Contact Us",
];

function getReply(message) {
  const text = message.toLowerCase();

  if (text.includes("product")) {
    return "LOOM SOLAR offers solar product solutions. Visit our Products page to explore the available product categories.";
  }

  if (text.includes("residential") || text.includes("home")) {
    return "We can help you explore residential rooftop solar possibilities. Share your location and energy requirements through our Contact page.";
  }

  if (text.includes("commercial") || text.includes("business")) {
    return "Explore solar possibilities for offices, shops and business spaces. Our team can help you discuss your requirements.";
  }

  if (text.includes("industrial") || text.includes("factory")) {
    return "Discover scalable solar possibilities for industrial facilities. Share your project requirements with our team.";
  }

  if (text.includes("career") || text.includes("job")) {
    return "Thank you for your interest in LOOM SOLAR. Please visit our Careers page for career information.";
  }

  if (
    text.includes("contact") ||
    text.includes("phone") ||
    text.includes("email")
  ) {
    return "You can contact LOOM SOLAR through our Contact page or connect with our team on WhatsApp.";
  }

  if (text.includes("price") || text.includes("cost")) {
    return "Solar pricing depends on your energy requirements and system size. Share your details through our enquiry form for further discussion.";
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hello! Welcome to LOOM SOLAR. How can I help you explore solar energy solutions today?";
  }

  return "Thank you for contacting LOOM SOLAR! Please select a topic below or share your requirements through our Contact page.";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! Welcome to LOOM SOLAR. ☀️ How can I help you today?",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  function sendMessage(text = message) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmed,
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getReply(trimmed),
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      botMessage,
    ]);

    setMessage("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage();
  }

  return (
    <div className="loom-chatbot">
      <style>{`
        .loom-chatbot {
          --chat-green: #168447;
          --chat-dark: #073b27;
          --chat-mint: #edf6ef;
          position: fixed;
          right: 25px;
          bottom: 100px;
          z-index: 99998;
          font-family: inherit;
        }

        /* CHAT BUTTON */

        .chatbot-toggle {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid white;
          border-radius: 50%;
          color: white;
          background: var(--chat-green);
          cursor: pointer;
          box-shadow: 0 5px 20px rgba(7,59,39,.25);
          transition: .3s ease;
          animation: chatbotPulse 3s infinite;
        }

        .chatbot-toggle:hover {
          transform: translateY(-3px);
          background: var(--chat-dark);
        }

        .chatbot-toggle svg {
          width: 25px;
          height: 25px;
        }

        /* CHAT WINDOW */

        .chatbot-window {
          position: fixed;
          right: 25px;
          bottom: 172px;
          width: 350px;
          max-width: calc(100vw - 30px);
          height: 380px;
          max-height: calc(100dvh - 195px);
          min-height: 270px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #fff;
          border: 1px solid #dce9df;
          border-radius: 13px;
          box-shadow: 0 14px 45px rgba(7,59,39,.17);
          animation: chatbotOpen .25s ease both;
        }

        /* HEADER */

        .chatbot-header {
          min-height: 63px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 14px;
          color: white;
          background: linear-gradient(120deg, #073b27, #168447);
        }

        .chatbot-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .chatbot-brand-icon {
          width: 37px;
          height: 37px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 50%;
          background: rgba(255,255,255,.12);
          color: #c9eea6;
        }

        .chatbot-brand strong {
          display: block;
          color: white;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .3px;
        }

        .chatbot-brand small {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255,255,255,.8);
          font-size: 10px;
          margin-top: 4px;
        }

        .chatbot-online-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b8ed77;
        }

        .chatbot-close {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 50%;
          background: rgba(255,255,255,.12);
          color: white;
          cursor: pointer;
        }

        .chatbot-close:hover {
          background: rgba(255,255,255,.25);
        }

        /* MESSAGES */

        .chatbot-messages {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 11px;
          background: #f5f9f5;
          scrollbar-width: thin;
          scrollbar-color: #c3d8c8 transparent;
        }

        .chatbot-message {
          display: flex;
          align-items: flex-end;
          gap: 7px;
          max-width: 94%;
        }

        .chatbot-message.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .chatbot-avatar {
          width: 25px;
          height: 25px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #e0f0e4;
          color: #087c43;
        }

        .chatbot-message.user .chatbot-avatar {
          background: #e2eae4;
          color: #31543e;
        }

        .chatbot-bubble {
          padding: 9px 11px;
          border: 1px solid #e5eee7;
          border-radius: 11px 11px 11px 3px;
          background: white;
          color: #334c3c;
          font-size: 11px;
          line-height: 1.65;
          overflow-wrap: anywhere;
        }

        .chatbot-message.user .chatbot-bubble {
          color: white;
          background: #168447;
          border-color: #168447;
          border-radius: 11px 11px 3px 11px;
        }

        /* QUICK QUESTIONS */

        .chatbot-quick {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding-left: 32px;
        }

        .chatbot-quick button {
          padding: 7px 9px;
          border: 1px solid #c8dfce;
          border-radius: 20px;
          background: white;
          color: #126b3c;
          font-size: 9px;
          font-weight: 750;
          cursor: pointer;
          transition: .2s ease;
        }

        .chatbot-quick button:hover {
          background: #e7f4e9;
          border-color: #168447;
        }

        /* INPUT */

        .chatbot-input-area {
          flex-shrink: 0;
          padding: 9px 11px 7px;
          border-top: 1px solid #e7eee8;
          background: white;
        }

        .chatbot-input-form {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 4px 4px 4px 11px;
          border: 1px solid #dce8de;
          border-radius: 30px;
          background: #f8fbf8;
        }

        .chatbot-input-form:focus-within {
          border-color: #168447;
          box-shadow: 0 0 0 3px rgba(22,132,71,.07);
        }

        .chatbot-input-form input {
          flex: 1;
          min-width: 0;
          height: 34px;
          border: none;
          outline: none;
          background: transparent;
          color: #193b2b;
          font-size: 11px;
        }

        .chatbot-input-form button {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border: none;
          border-radius: 50%;
          background: #168447;
          color: white;
          cursor: pointer;
          transition: .2s ease;
        }

        .chatbot-input-form button:hover {
          background: #075b32;
          transform: scale(1.05);
        }

        .chatbot-footer {
          padding: 6px 5px 0;
          text-align: center;
          color: #94a197;
          font-size: 9px;
        }

        .chatbot-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          margin-top: 3px;
          color: #168447;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
        }

        /* ANIMATIONS */

        @keyframes chatbotPulse {
          0%, 100% {
            box-shadow: 0 5px 20px rgba(7,59,39,.2);
          }
          50% {
            box-shadow: 0 5px 27px rgba(22,132,71,.35);
          }
        }

        @keyframes chatbotOpen {
          from {
            opacity: 0;
            transform: translateY(9px) scale(.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* TABLET */

        @media (max-width: 900px) {
          .chatbot-window {
            width: 335px;
            height: 370px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .loom-chatbot {
            right: 16px;
            bottom: 91px;
          }

          .chatbot-toggle {
            width: 54px;
            height: 54px;
          }

          .chatbot-toggle svg {
            width: 23px;
            height: 23px;
          }

          .chatbot-window {
            right: 12px;
            bottom: 155px;
            width: calc(100vw - 24px);
            max-width: 370px;
            height: 360px;
            max-height: calc(100dvh - 175px);
            min-height: 250px;
          }
        }

        @media (max-height: 450px) {
          .chatbot-window {
            height: calc(100dvh - 175px);
            min-height: 220px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loom-chatbot *,
          .loom-chatbot *::before,
          .loom-chatbot *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {isOpen && (
        <section className="chatbot-window" aria-label="LOOM SOLAR chat">
          <header className="chatbot-header">
            <div className="chatbot-brand">
              <div className="chatbot-brand-icon">
                <Sun size={21} />
              </div>

              <div>
                <strong>LOOM SOLAR</strong>
                <small>
                  <span className="chatbot-online-dot" />
                  Solar Assistant · Online
                </small>
              </div>
            </div>

            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={17} />
            </button>
          </header>

          <div className="chatbot-messages" aria-live="polite">
            {messages.map((item) => (
              <div
                className={`chatbot-message ${item.sender}`}
                key={item.id}
              >
                <div className="chatbot-avatar">
                  {item.sender === "bot" ? (
                    <Bot size={14} />
                  ) : (
                    <User size={14} />
                  )}
                </div>

                <div className="chatbot-bubble">{item.text}</div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="chatbot-quick">
                {quickQuestions.map((question) => (
                  <button
                    type="button"
                    key={question}
                    onClick={() => sendMessage(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <form
              className="chatbot-input-form"
              onSubmit={handleSubmit}
            >
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                aria-label="Type your message"
              />

              <button type="submit" aria-label="Send message">
                <Send size={15} />
              </button>
            </form>

            <div className="chatbot-footer">
              LOOM SOLAR Virtual Assistant
              <br />
              <Link to="/contact" className="chatbot-contact-link">
                Contact our team <ArrowUpRight size={11} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        title="Chat with LOOM SOLAR"
      >
        {isOpen ? <X /> : <MessageCircle />}
      </button>
    </div>
  );
}
