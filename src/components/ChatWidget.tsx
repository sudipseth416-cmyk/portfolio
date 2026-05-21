'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareCode, X, Send, Sparkles, User, Bot } from 'lucide-react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const presetQuestions = [
  { text: 'Tell me about your projects 🛠️', keyword: 'project' },
  { text: 'What is your skill set? 💻', keyword: 'skill' },
  { text: 'How can I reach you? 📩', keyword: 'contact' },
  { text: 'Are you currently studying? 📚', keyword: 'study' },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hi there! I am Sudip's virtual AI assistant. Ask me anything about his projects, skills, certifications, or how to contact him!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('project') || q.includes('attendance') || q.includes('bot') || q.includes('tracker')) {
      return "Sudip has built several projects: \n1. **Attendance Tracker**: A Python program helping college students track lectures across 8 semesters with a built-in 'Bunk Calculator'.\n2. **Friendship Bot**: A rule-based conversational script in Python.\n3. **Cyber Portfolio**: This Next.js 15 site with interactive WebGL particle dynamics!";
    }
    if (q.includes('skill') || q.includes('language') || q.includes('python') || q.includes('tech') || q.includes('code')) {
      return "Sudip's programming skills include:\n- **Languages**: Python (Intermediate), JavaScript, HTML & CSS, and basic C.\n- **Concepts**: Logic building, structured problem solving, and basic Data Structures.\n- **Tools**: VS Code, Git & GitHub, CodeChef, and HackerRank.";
    }
    if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('hire') || q.includes('linkedin')) {
      return "You can contact Sudip in several ways:\n- **Email**: [sudipseth416@gmail.com](mailto:sudipseth416@gmail.com)\n- **LinkedIn**: [Sudip Seth Profile](https://www.linkedin.com/in/sudip-seth-491066325)\n- **GitHub**: [@sudipseth416-cmyk](https://github.com/sudipseth416-cmyk)\n\nYou can also launch a direct email using the Contact Form on this site!";
    }
    if (q.includes('study') || q.includes('education') || q.includes('certif') || q.includes('bootcamp') || q.includes('letsupgrade')) {
      return "Sudip is actively learning and building his credentials:\n- **Bootcamps**: Certified Python Bootcamp graduate from LetsUpgrade.\n- **Self-Directed Study**: Immersive syllabus covering Data Science, Algorithms, and Machine Learning foundations.\n- **Platforms**: Practicing regularly on CodeChef and HackerRank.";
    }
    if (q.includes('hello') || q.includes('hi ') || q.includes('hey') || q.includes('sup')) {
      return "Hello! How can I help you explore Sudip's portfolio today?";
    }

    return "I am not sure I understand that query completely. Try asking me about his 'projects', 'skills', 'certifications', or 'contact info'!";
  };

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // User Message
    const userMsg: Message = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Bot Response trigger
    setTimeout(() => {
      const responseText = getBotResponse(textToSend);
      setMessages((prev) => [...prev, { sender: 'bot', text: responseText }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95 transition-all duration-300"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquareCode className="h-6 w-6" />}
      </button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-[330px] sm:w-[380px] h-[500px] rounded-2xl glass flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10 z-50 bg-[#030712]/95"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-indigo-500 p-0.5 flex items-center justify-center text-black">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">Sudip&apos;s Assistant</h4>
                  <span className="text-[10px] text-cyan-400 font-medium">Virtual Representative</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Chat Body Logs */}
            <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 text-sm">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 max-w-[85%] ${
                    msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon Avatar */}
                  <div
                    className={`h-7 w-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${
                      msg.sender === 'user'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/20'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`p-3 rounded-2xl leading-relaxed text-xs ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white rounded-tr-none'
                        : 'bg-white/5 border border-white/5 text-slate-200 rounded-tl-none'
                    }`}
                  >
                    {msg.text.split('\n').map((line, lIdx) => {
                      // Basic Markdown parsing for bold text
                      const boldRegex = /\*\*(.*?)\*\*/g;
                      let parsedLine = line;
                      const matches = line.matchAll(boldRegex);
                      
                      // Render text links
                      if (line.includes('mailto:') || line.includes('http')) {
                        const linkRegex = /\[(.*?)\]\((.*?)\)/g;
                        const linkMatch = linkRegex.exec(line);
                        if (linkMatch) {
                          return (
                            <p key={lIdx} className="mb-1.5">
                              {line.split(linkMatch[0])[0]}
                              <a href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-semibold hover:text-cyan-300">
                                {linkMatch[1]}
                              </a>
                              {line.split(linkMatch[0])[1]}
                            </p>
                          );
                        }
                      }
                      
                      return (
                        <p key={lIdx} className="mb-1.5 last:mb-0">
                          {line.startsWith('- ') ? '• ' : ''}
                          {line.replace('- ', '').split('**').map((part, pIdx) => 
                            pIdx % 2 === 1 ? <strong key={pIdx} className="text-cyan-300">{part}</strong> : part
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="h-7 w-7 rounded-full shrink-0 flex items-center justify-center bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-slate-400 text-xs rounded-tl-none flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Presets Grid */}
            {messages.length === 1 && (
              <div className="px-5 pb-3 grid grid-cols-2 gap-2">
                {presetQuestions.map((q) => (
                  <button
                    key={q.text}
                    onClick={() => handleSend(q.text)}
                    className="text-left p-2 rounded-lg border border-white/5 bg-white/5 text-[10px] text-slate-300 hover:border-cyan-400/30 hover:text-white transition-colors"
                  >
                    {q.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-4 border-t border-white/5 flex gap-2 items-center bg-white/5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me a question..."
                className="flex-1 glass border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors bg-[#030712]/50"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-black hover:scale-105 transition-all"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
