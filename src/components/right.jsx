import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircleUser, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import NewChat from "./new-chat";
import RunningChat from "./running-chat";
// import img1 from "../images/1.png";
// import img2 from "../images/2.png";
// import img3 from "../images/3.png";
// import img4 from "../images/4.png";
// import img5 from "../images/5.png";
// import img6 from "../images/6.png";
// import img7 from "../images/7.png";
// import img8 from "../images/8.png";
// const suggestions = [ "Create images", "Analyze images", "Summarize text", "Analyze Data", "Code", "Get Advice", "Surprise me", "Help me write" ];

const RightComponent = ({ newChat }) => {
    const [search, setSearch] = useState("");
    const [showNewChat, setShowNewChat] = useState(true);

    useEffect(() => {
        if (newChat) {
            setSearch("");
            setShowNewChat(true);
        } else if (search) {
            setShowNewChat(false);
        } 
    }, [newChat, search]);
      
    return (
        <div className="h-screen">
            <div className="flex items-center justify-between p-4 text-[#b4b4b4]">
                <div className="flex items-center gap-2  hover:bg-[#303030] rounded-[6px] p-2">
                    <h1 className="text-lg font-bold">ChatGPT</h1>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className="hover:bg-[#303030] rounded-full p-1">
                    <FontAwesomeIcon icon={faCircleUser} size="xl"/>
                </div>
            </div>

            {showNewChat ? <NewChat setSearch={setSearch}/> : <RunningChat search={search}/>}

            <div>
                <div className="absolute bottom-0 flex justify-center gap-2 w-[82vw] p-4">
                    <p className="text-xs">ChatGPT can make mistakes. Check important info.</p>
                </div>
                <div className="absolute bottom-0 right-0 flex p-4 text-[#b4b4b4]">
                    <FontAwesomeIcon icon={faCircleQuestion} size="xl"/>
                </div>
            </div>
        </div>
    )
}

export default RightComponent;