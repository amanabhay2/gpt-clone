import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import waveform from "../images/waveform-path.png";

const Searchbar = ({ setSearch }) => {
    return (
        <div className="bg-[#303030] rounded-[24px] overflow-hidden">
            <input 
                type="text" 
                placeholder="Ask anything" 
                className="bg-transparent outline-none text-white w-[60vw] p-4" 
                onKeyDown={(e) => {
                    if(e.key === "Enter") {
                        setSearch(e.target.value);
                    }
                }}
            />
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="border border-[#525252] border-2 rounded-full  w-9 h-9 flex items-center justify-center text-xl hover:bg-[#424242]">+</div>
                    <div className="flex items-center gap-2 border border-[#525252] border-2 rounded-full p-2 hover:bg-[#424242]">
                        <FontAwesomeIcon icon={faGlobe} style={{ color: "#cecece", }} />
                        <p className="text-xs">Search</p>
                    </div>
                    <div className="flex items-center gap-2 border border-[#525252] border-2 rounded-full p-2 hover:bg-[#424242]">
                        <FontAwesomeIcon icon={faLightbulb} style={{ color: "#cecece", }} />
                        <p className="text-xs">Reason</p>
                    </div>
                </div>
                <div>
                    <img src={waveform} alt="Voice" className="bg-white rounded-full w-7 h-7 p-1" />
                </div>
            </div>
        </div>
    )
}

export default Searchbar;