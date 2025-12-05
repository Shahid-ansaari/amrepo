


"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChatBubbleBottomCenterIcon, XMarkIcon, TrashIcon } from "@heroicons/react/24/solid";


// Bot responses stored as plain objects
// const BOT_RESPONSES = {
//   "what services do you offer?": [
//     { type: "text", content: "We provide web, mobile, and desktop app development services." }
//   ],
//   "how can i contact you?": [
//     { type: "text", content: "Contact Us:" },
//     { type: "link", content: "Phone: +91 7355256667", href: "tel:+917355256667", color: "indigo-600" },
//     { type: "link", content: "WhatsApp: Chat on WhatsApp", href: "https://wa.me/917355256667", color: "green-600" },
//     { type: "link", content: "Contact Page", href: "/contact", color: "indigo-600" }
//   ],
//   "show me your social media pages": [
//     { type: "text", content: "Connect with us on Social Media:" },
//     { type: "link", content: "Instagram", href: "https://www.instagram.com/", color: "pink-600" },
//     { type: "link", content: "LinkedIn", href: "https://www.linkedin.com/", color: "blue-600" },
//     { type: "text", content: "Follow us for updates, tips, and the latest in IT solutions!" }
//   ],
//   "do you build desktop apps?": [
//     { type: "text", content: "Yes! We specialize in high-performance desktop applications." }
//   ],
//   "tell me about your company.": [
//     { type: "text", content: "We are Magnifier Solutions, delivering innovative tech solutions tailored to your needs." }
//   ],
//   default: [
//     { type: "text", content: "Sorry, I didn't understand that. Please select one of the options below." }
//   ]
// };

// // Quick reply buttons
// const QUICK_REPLIES = [
//   "What services do you offer?",
//   "How can I contact you?",
//   "Do you build desktop apps?",
//   "Show me your social media pages",
//   "Tell me about your company."
// ];



// Bot responses stored as plain objects
const BOT_RESPONSES = {
  "what products do you provide?": [
    { type: "text", content: "We manufacture and supply:" },
    { type: "text", content: "• Portable Office Cabins" },
    { type: "text", content: "• Container Site Offices" },
    { type: "text", content: "• Security Guard Cabins" },
    { type: "text", content: "• Portable Cafés & Shops" },
    { type: "text", content: "• Labor Accommodations & Toilets" },
    { type: "text", content: "All cabins are fully customizable based on your requirements." }
  ],

  "how can i get pricing?": [
    { type: "text", content: "You can contact us for pricing and quotations anytime:" },
    { type: "link", content: "📞 Call: +91 9876543210", href: "tel:+919266722472", color: "indigo-600" },
    { type: "link", content: "💬 WhatsApp: Chat on WhatsApp", href: "https://wa.me/9266722472", color: "green-600" },
    { type: "link", content: "📩 Email: info@amofficesolutions.com", href: "mailto:info@amofficegroup.in", color: "blue-600" },
    { type: "link", content: "🌐 Contact Page", href: "/contact", color: "indigo-600" }
  ],
  "how can i contact you?": [
    { type: "text", content: "Contact Us:" },
    { type: "link", content: "Phone: +91 7355256667", href: "tel:+919266722472", color: "indigo-600" },
    { type: "link", content: "WhatsApp: Chat on WhatsApp", href: "https://wa.me/9266722472", color: "green-600" },
    { type: "link", content: "Contact Page", href: "/contact", color: "indigo-600" }
  ],

  "do you deliver and install?": [
    { type: "text", content: "Yes! We deliver and install cabins anywhere in India." },
    { type: "text", content: "Delivery time depends on size and customization — normally 7 to 15 days." }
  ],

  "can i customize the cabin?": [
    { type: "text", content: "Absolutely! You can customize:" },
    { type: "text", content: "• Interior / Exterior finishing" },
    { type: "text", content: "• Electrical & Plumbing" },
    { type: "text", content: "• AC / Furniture / Pantry / Washroom" },
    { type: "text", content: "• Partition, branding & flooring" }
  ],

  "show me your social media pages": [
    { type: "text", content: "Connect with AM Office Solutions:" },
    { type: "link", content: "Instagram", href: "https://www.instagram.com/", color: "pink-600" },
    { type: "link", content: "Facebook", href: "https://www.facebook.com/", color: "blue-600" },
    { type: "link", content: "LinkedIn", href: "https://www.linkedin.com/", color: "blue-600" },
    { type: "link", content: "YouTube", href: "https://www.youtube.com/", color: "red-600" }
  ],

  default: [
    { type: "text", content: "Sorry, I didn’t understand that. Please choose an option below 👇" }
  ]
};

// Quick reply buttons
const QUICK_REPLIES = [
  "What products do you provide?",
  "how can i contact you?",
  "How can I get pricing?",
  "Do you deliver and install?",
  "Can I customize the cabin?",
  "Show me your social media pages"
];

export default function ModernChatbot() {
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("chatbotMessages");
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Persist messages and scroll
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chatbotMessages", JSON.stringify(messages));
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Send user message
  const handleSend = (msgText) => {
    if (!msgText.trim()) return;
    const userMsg = { sender: "user", content: msgText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    botReply(msgText);
  };

  // Bot reply
  const botReply = (userText) => {
    setTyping(true);
    setTimeout(() => {
      const key = userText.toLowerCase();
      const botContent = BOT_RESPONSES[key] || BOT_RESPONSES.default;
      // Always ensure botContent is an array
      setMessages((prev) => [
        ...prev,
        { sender: "bot", content: Array.isArray(botContent) ? botContent : [botContent] }
      ]);
      setTyping(false);
    }, 1000);
  };

  // Clear chat
  const handleClear = () => {
    setMessages([]);
    if (typeof window !== "undefined") localStorage.removeItem("chatbotMessages");
  };

  // Render bot content safely
  const renderBotContent = (contentArray) => {
    if (!Array.isArray(contentArray)) return null;
    return contentArray.map((item, i) => {
      if (item.type === "text") return <div key={i}>{item.content}</div>;
      if (item.type === "link")
        return (
          <div key={i}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`underline text-${item.color} hover:opacity-80`}
            >
              {item.content}
            </a>
          </div>
        );
      return null;
    });
  };

  return (
    <>
      {/* Floating toggle button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed md:bottom-6 bottom-3 right-4 z-50 bg-[#e6f2ff] border-sky-950 border hover:bg-[#d3d7ff] text-blue--950 sm:p-4 p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Open Chatbot"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          {/* <ChatBubbleBottomCenterIcon className="w-6 h-6" /> */}
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-4 z-50 w-80 sm:w-md flex flex-col rounded-xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
          {/* Header */}
          <div className="bg-sky-900 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold">AM Office</span>
            <div className="flex space-x-2">
              <button
                onClick={handleClear}
                className="p-1 hover:bg-indigo-500 rounded"
                title="Clear Chat"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
              <button onClick={() => setOpen(false)} className="p-1 hover:bg-indigo-500 rounded">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-2 overflow-y-auto max-h-72 sm:max-h-80 bg-gray-50 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm sm:text-[1rem] max-w-[80%] break-words ${msg.sender === "bot" ? "bg-indigo-100 text-gray-800" : "bg-sky-700 text-white"
                    }`}
                >
                  {msg.sender === "bot" ? renderBotContent(msg.content) : msg.content}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-2xl text-sm max-w-[60%] break-words bg-indigo-100 text-gray-800 animate-pulse">
                  Typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          {/* Quick replies */}
          <div className="px-3 pb-2 flex flex-wrap gap-2">
            {QUICK_REPLIES.map((btn) => (
              <button
                key={btn}
                className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm transition"
                onClick={() => handleSend(btn)}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            className="flex border-t border-gray-200 bg-white"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm outline-none bg-transparent"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-sky-800 hover:bg-sky-700 text-white px-4 py-2 rounded-bl-none rounded-br-xl rounded-tr-xl transition-all duration-200 font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
