import Searchbar from "./searchbar";

const NewChat = ({ setSearch }) => {
    return (
        <div className="flex items-center justify-center p-4 h-[80vh] flex-col gap-8">
        <div className="">
            <p className="text-3xl font-bold">What can I help with?</p>
        </div>
        
        <Searchbar setSearch={setSearch} />

        {/* <div className="flex flex-wrap gap-2">
            {suggestions.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <img src={`img${index + 1}.png`} alt={item} className="w-6 h-6"/>
                    <p className="text-xs">{item}</p>
                </div>
            ))}                    
        </div> */}

    </div>
    )
}

export default NewChat;