import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircleUser, faCircleQuestion, faGlobe, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import waveform from "../images/waveform-path.png";
// import img1 from "../images/1.png";
// import img2 from "../images/2.png";
// import img3 from "../images/3.png";
// import img4 from "../images/4.png";
// import img5 from "../images/5.png";
// import img6 from "../images/6.png";
// import img7 from "../images/7.png";
// import img8 from "../images/8.png";

// const suggestions = [ "Create images", "Analyze images", "Summarize text", "Analyze Data", "Code", "Get Advice", "Surprise me", "Help me write" ];

const RightComponent = () => {
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

            <div className="flex items-center justify-center p-4 h-[80vh] flex-col gap-8">
                <div className="">
                    <p className="text-3xl font-bold">What can I help with?</p>
                </div>
                <div className="bg-[#303030] rounded-[6px] rounded-[24px] overflow-hidden">
                    <input type="text" placeholder="Ask anything" className="bg-transparent outline-none text-white w-[60vw] p-4"/>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="border border-[#525252] border-2 rounded-full  w-9 h-9 flex items-center justify-center text-xl hover:bg-[#424242]">+</div>
                            <div className="flex items-center gap-2 border border-[#525252] border-2 rounded-full p-2 hover:bg-[#424242]">
                                <FontAwesomeIcon icon={faGlobe} style={{color: "#cecece",}} />
                                <p className="text-xs">Search</p>
                            </div>
                            <div className="flex items-center gap-2 border border-[#525252] border-2 rounded-full p-2 hover:bg-[#424242]">
                                <FontAwesomeIcon icon={faLightbulb} style={{color: "#cecece",}} />
                                <p className="text-xs">Reason</p>
                            </div>
                        </div>
                        <div>
                            <img src={waveform} alt="Voice" className="bg-white rounded-full w-7 h-7 p-1"/>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-wrap gap-2">
                    {suggestions.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <img src={`img${index + 1}.png`} alt={item} className="w-6 h-6"/>
                            <p className="text-xs">{item}</p>
                        </div>
                    ))}                    
                </div> */}

            </div>

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