import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faMagnifyingGlass, faPenToSquare, faEllipsis} from '@fortawesome/free-solid-svg-icons'
import logo from '../images/chat-gpt.png';
import expore from '../images/four-circle.png';
import hexagon from '../images/hexagon-check.png';

const LeftComponent = () => {
    const [historyList, setHistoryList] = useState([{
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, 
    {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    },
    {
        id: 1,
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        id: 2,
        role: 'assistant',
        content: 'I am fine, thank you!'
    }
]);

    return (
        <div className="bg-[#171717] h-screen text-[#ececec] overflow-hidden relative">
            
            <div className="text-[#b4b4b4] p-4 text-xl flex justify-between items-center relative top-0 left-0">
                <FontAwesomeIcon icon={faFilm} className="hover:bg-[#424242] p-2 rounded-[20%]"/>
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="hover:bg-[#424242] p-2 rounded-[20%]"/>
                    <FontAwesomeIcon icon={faPenToSquare} className="hover:bg-[#424242] p-2 rounded-[20%]"/>
                </div>
            </div>
            <div className="text-sm h-[calc(100vh-100px)] overflow-y-auto scrollbar">
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
                <div className="hover:bg-[#424242] ml-4 mr-4 p-1 rounded-[6px] flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-4 h-4 inline" /> <p>ChatGPT</p>
                </div>
                <div className="hover:bg-[#424242] ml-4 mr-4 p-1 rounded-[6px] flex items-center gap-2">
                    <img src={expore} alt="explore" className="w-4 h-4 inline" /> <p>Explore GPTs</p>
                </div>
                <div className="text-sm text-[#ffffff] mt-6">
                    <h6 className=" ml-4 mr-4 p-1 rounded-[4px]">Yestardy</h6>
                    {historyList.map((item) => (
                        <div key={item.id} className="hover:bg-[#424242] ml-4 mr-4 p-2 rounded-[6px] flex justify-between items-center gap-2">
                             <p>{item.content}</p>
                             <FontAwesomeIcon icon={faEllipsis} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="fixed bottom-0 left-0 p-4 bg-[#171717] flex gap-2 w-[18vw]">
                <img src={hexagon} alt="hexagon" className="w-8 h-8" />
                <div className="">
                    <p className="text-sm">Upgrade Plan</p>
                    <p className="text-xs">More access to the best models</p>
                </div>
            </div>
        </div>
    )
}

export default LeftComponent;