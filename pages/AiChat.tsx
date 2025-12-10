
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI, Type, Chat } from "@google/genai";
import Icon from '../components/Icon';
import { ACTIVITIES } from '../constants';
import { Activity } from '../types';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  cards?: Activity[];
}

const AiChat: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  // Initialize Chat Session
  useEffect(() => {
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // Prepare context about activities for the AI
        const activitiesContext = JSON.stringify(ACTIVITIES.map(a => ({
          id: a.id,
          title: a.title,
          category: a.category,
          time: a.timeString,
          location: a.locationName,
          description: a.description
        })));

        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: `You are Ficara AI, an energetic and helpful assistant for a social discovery app. 
            Your goal is to help users find local activities and events to join.
            
            Here is the list of currently available activities in the app:
            ${activitiesContext}

            When a user asks for recommendations, analyze their request and suggest relevant activities from the provided list.
            If they ask about specific categories (like sports, food, music), filter the list mentally and recommend the best matches.
            If they ask general questions, be conversational and helpful.
            
            IMPORTANT: You must ALWAYS respond using this specific JSON schema:
            {
              "text": "Your conversational response to the user here.",
              "recommendedActivityIds": ["id1", "id2"] // An array of Activity IDs that you are recommending. Leave empty if none.
            }
            `,
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                text: { type: Type.STRING },
                recommendedActivityIds: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                }
              },
              required: ["text", "recommendedActivityIds"]
            }
          }
        });
      } catch (error) {
        console.error("Failed to initialize AI chat:", error);
      }
    };

    initChat();
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleBack = () => {
    navigate('/explore');
  };

  const handleSuggestionClick = (activityId: string) => {
    navigate(`/activity/${activityId}`);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add User Message
    const newUserMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      if (!chatSessionRef.current) {
        // Fallback if init failed or slow
        throw new Error("AI Session not ready");
      }

      const result = await chatSessionRef.current.sendMessage({ message: text });
      const responseText = result.text;
      
      let aiResponseText = "I'm having trouble connecting right now. Please try again.";
      let recommendedCards: Activity[] = [];

      try {
        // Parse the JSON response
        const parsedResponse = JSON.parse(responseText || '{}');
        aiResponseText = parsedResponse.text || responseText;
        
        if (parsedResponse.recommendedActivityIds && Array.isArray(parsedResponse.recommendedActivityIds)) {
          recommendedCards = ACTIVITIES.filter(a => parsedResponse.recommendedActivityIds.includes(a.id));
        }
      } catch (e) {
        console.error("Error parsing AI response", e);
        aiResponseText = responseText || "Sorry, I couldn't process that.";
      }

      const newAiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponseText,
        cards: recommendedCards
      };
      
      setMessages(prev => [...prev, newAiMsg]);

    } catch (error) {
      console.error("Error sending message:", error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "Sorry, I'm having trouble accessing the server right now. Please check your connection or API key.",
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col bg-background-light dark:bg-[#101622] font-display">
      <div className="flex h-full w-full">
        {/* SideNavBar - Hidden on mobile, visible on medium screens and up */}
        <aside className="hidden md:flex w-full max-w-xs flex-col border-r border-gray-200/10 bg-[#111318] p-4">
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={handleBack}>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaTfBHwnLKqZrPIOS3wDydFz45QPCVlmrBIT_2Mqi4-w6KjGJ7FkWOBMT5VehU4Jyjpr4y1CYmGxxzYBXi8jM-Ob_GVyBDOlbjVs4SrtBi7MFUSiAhFVlHqPzBku6n6gqscZmODHMFuyhk_hudcNfgQ1M3fWkDCjmEfOLe7TnsRP1Ny35ZFDiHlfPQoxYREn3aOrDeFBtVkOx4KHMfX52GFAB0OaHnIoiDkusXBIilledPt4p2h6O2fuijze--pz2YgIHpIIGYBBM')" }}></div>
                <div className="flex flex-col">
                  <h1 className="text-white text-base font-medium leading-normal">Ficara</h1>
                  <p className="text-gray-400 dark:text-[#9da6b9] text-sm font-normal leading-normal">AI Chat Assistant</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div 
                  onClick={() => handleSendMessage("What's happening nearby?")}
                  className="flex cursor-pointer items-center gap-3 rounded-lg bg-primary/20 dark:bg-[#282e39] px-3 py-2 hover:bg-primary/30 transition-colors"
                >
                  <Icon name="explore" className="text-primary dark:text-white text-2xl" />
                  <p className="text-primary dark:text-white text-sm font-medium leading-normal">What's happening nearby?</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex flex-1 flex-col bg-background-light dark:bg-[#101622]">
          {/* Header */}
          <header className="flex items-center gap-3 border-b border-gray-200/10 p-4 bg-white dark:bg-[#111318]">
            <button className="md:hidden text-gray-600 dark:text-gray-300" onClick={handleBack}>
               <Icon name="arrow_back" className="text-2xl" />
            </button>
            <Icon name="smart_toy" className="text-gray-600 dark:text-gray-300 text-2xl" />
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">AI Chat Assistant</h2>
          </header>

          {/* Conversation Log */}
          <div ref={scrollRef} className="flex flex-1 flex-col overflow-y-auto p-4 md:p-6 scroll-smooth">
            <div className="flex w-full flex-col gap-6 justify-end min-h-full">
              
              {/* Static Welcome / Empty State */}
              {messages.length === 0 && (
                <div className="flex flex-1 flex-col items-center justify-center gap-6 py-6 opacity-80">
                  <div className="bg-center bg-no-repeat aspect-square bg-contain rounded-lg w-24" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARixIlSWKDq8wcjkAqf_azakjacV2AlHkpwsCi1HhrZ9_0HmJ5tdn4ysmETNqCmQEcArrKjHfYIrWn5S9l4HCG1yA_O9HUO1RT-sMGB_uGco-nVKAk2IckVyjrmZRbO64nDW9Gpw33SglQcMjizEOF_cPgih2CSVPbD4wJyLe019tzPmQHXFKN3ub7xdaumDq6xzBkzUUs_GagxLIqZhEsB_TPs3NFV5Vssgc1Sv1cLEBHU0vleP6r_uAyrRrczdW_sSHSlsiktFk')" }}></div>
                  <div className="flex max-w-md flex-col items-center gap-2">
                    <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] text-center">Welcome to Ficara!</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-normal text-center">I'm your Ficara assistant. Ask me for event suggestions or what's happening around you!</p>
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} gap-3 animate-fade-in`}>
                  
                  {msg.sender === 'ai' && (
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0 self-end mb-1" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARwIWmMjRyUmd2g2VFWZJrnBfqpks9ok6H617ywD8JZpWemtZWreMleDHzdaDbeIPPzrhR3REz1jAesieKfl2v5hlbLiPI8mkdH3DCgu32dwXKi8S2ShpdkjubmNqxfM-NCRHfo6_GS5ejIgESP6ElELBUMJiGGEhXvH6KQNKYAE1_US_jDXsCFeRmNbuYuBYlnhhGHgbZfyhFx7Je_3v7yM5POgFVcGg6xf5LRkPBitgPYo2r2uv6SB75b9BQcT4yWyoRp9LLJOI')" }}></div>
                  )}

                  <div className={`flex max-w-2xl flex-col gap-1 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <p className="text-gray-600 dark:text-[#9da6b9] text-[13px] font-normal leading-normal">
                      {msg.sender === 'user' ? 'You' : 'AI Assistant'}
                    </p>
                    
                    <div className={`rounded-lg px-4 py-3 text-base font-normal leading-normal ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-[#282e39] text-gray-900 dark:text-white'}`}>
                      {msg.text}
                    </div>

                    {msg.cards && msg.cards.length > 0 && (
                      <div className="flex w-full flex-col gap-3 mt-2">
                        {msg.cards.map(card => (
                          <div key={card.id} className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-lg bg-white dark:bg-[#1c1f27] p-4 shadow-sm">
                            <div className="flex flex-[2_2_0px] flex-col gap-2 justify-between">
                              <div className="flex flex-col gap-1">
                                <p className="text-gray-900 dark:text-white text-base font-bold leading-tight">{card.title}</p>
                                <p className="text-gray-600 dark:text-[#9da6b9] text-sm font-normal leading-normal">{card.timeString} • {card.locationName}</p>
                              </div>
                              <button 
                                onClick={() => handleSuggestionClick(card.id)}
                                className="flex w-fit min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 bg-gray-200 dark:bg-[#282e39] px-4 text-sm font-medium leading-normal text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-[#323945]"
                              >
                                <span className="truncate">View Details</span>
                              </button>
                            </div>
                            <div className="w-full sm:w-32 h-32 bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url('${card.image}')` }}></div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {msg.sender === 'user' && (
                     <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0 self-end mb-1" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhyYutZsAhFf9120repm7zJrdkMjcI9VJ-H-DPiIahcQK1tanqkkNW5RTVsrHIXqW7WiqzZd9zg1Q-ABvoP8SGaDBawDW8Bqf2VD6ZWYJQyhpguPY0R818OZRDk6rdNu39oJz_8SY3YHby5kqH4d2F7U58Grk1kHbaJ1eR52SviwvsJdd21wAr6F75vgQyFbaTXBXlvuL2H_JR08oiLoCHoSKazrXjcei9zWitQKHxt1wcBtDcCzwM9K5aGgRHPb9s3_q2WOiGFCg')" }}></div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex w-full justify-start gap-3 animate-pulse">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0 self-end mb-1" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARwIWmMjRyUmd2g2VFWZJrnBfqpks9ok6H617ywD8JZpWemtZWreMleDHzdaDbeIPPzrhR3REz1jAesieKfl2v5hlbLiPI8mkdH3DCgu32dwXKi8S2ShpdkjubmNqxfM-NCRHfo6_GS5ejIgESP6ElELBUMJiGGEhXvH6KQNKYAE1_US_jDXsCFeRmNbuYuBYlnhhGHgbZfyhFx7Je_3v7yM5POgFVcGg6xf5LRkPBitgPYo2r2uv6SB75b9BQcT4yWyoRp9LLJOI')" }}></div>
                  <div className="flex flex-col items-start gap-1">
                     <p className="text-gray-600 dark:text-[#9da6b9] text-[13px] font-normal leading-normal">AI Assistant</p>
                     <div className="rounded-lg bg-gray-200 dark:bg-[#282e39] px-4 py-3 text-base font-normal leading-normal text-gray-900 dark:text-white">
                       Typing...
                     </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Input Area */}
          <div className="border-t border-gray-200/10 p-4 md:p-6 bg-white dark:bg-[#111318]">
            <div className="flex flex-col gap-3">
              {/* Text Input */}
              <div className="flex w-full items-center gap-2 rounded-xl bg-gray-100 dark:bg-[#1c1f27] p-2 border border-transparent focus-within:border-primary/50 transition-colors">
                <input 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 border-none bg-transparent px-2 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-0" 
                  placeholder="Ask about events, activities, or people near you..." 
                  type="text"
                />
                <button 
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Icon name="send" className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AiChat;
