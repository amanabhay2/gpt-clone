import { useState, useEffect, useRef } from "react";
import Searchbar from "./searchbar";
import UserMessage from "./user-message";
import AssistantMessage from "./assistant-message";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyCT5WpHSOl2NRnqlroUsZeyxkuzQ7jARFM");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


const RunningChat = ({ search }) => {
    const [response, setResponse] = useState("");
    const [searchKey, setSearchKey] = useState(search);
    const [messages, setMessages] = useState([
        { role: "user", parts: [{ text: "Hello" }] },
        { role: "model", parts: [{ text: "Great to meet you. What would you like to know?" }] },
    ]);
    
    // Move chat instance to useRef to persist between renders
    const chatRef = useRef(model.startChat({
        history: messages,
    }));

    const result = async () => {
        try {
            const res = await chatRef.current.sendMessageStream(searchKey);
            
            // Add user message
            setMessages(prev => [...prev, { role: "user", parts: [{ text: searchKey }] }]);
            
            // Process the stream
            let fullResponse = '';
            for await (const chunk of res.stream) {
                fullResponse += chunk.text();
                setResponse(fullResponse);
            }
            console.log(messages);
            
            // Add assistant message
            setMessages(prev => [...prev, { role: "model", parts: [{ text: fullResponse }] }]);
        } catch (error) {
            console.error('Chat error:', error);
        }
    };

    useEffect(() => {
        setSearchKey(search);
        console.log(searchKey);
        if (searchKey) {
            result();
        }
    }, [searchKey]);

    return (
        <div className="flex flex-col justify-center items-center h-[86vh] relative text-white ">
            <div className="flex flex-col h-[84vh] w-[58vw] overflow-y-auto scrllbar">
                <style>
                    {`
                        .scrollbar::-webkit-scrollbar {
                            width: 8px;
                        }
                        
                        .scrollbar::-webkit-scrollbar-track {
                            background: #171717;
                        }
                        
                        .scrollbar::-webkit-scrollbar-thumb {
                            background: #424242;
                            border-radius: 4px;
                        }
                        
                        .scrollbar::-webkit-scrollbar-thumb:hover {
                            background: #555;
                        }
                    `}
                </style>
                <div className="flex flex-col gap-2">
                    {messages.map((message, index) => (
                        <div key={index}>
                            {message.role === "user" ? (
                                <div key={index} className="flex justify-end">
                                    <UserMessage content={message.parts[0].text} />
                                </div>
                            ) : (
                                <div key={index} className="flex justify-start">
                                    <AssistantMessage content={message.parts[0].text} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center absolute bottom-0 left-0 right-0">
                <Searchbar setSearch={setSearchKey}/>
            </div>
        </div>
    )
}

export default RunningChat;