const AssistantMessage = ({ content }) => {
    return (
        <div className="flex w-full">
            <div className="bg-gray-100 rounded-lg p-4 text-gray-800 max-w-prose">
                <p className="whitespace-pre-wrap">{content}</p>
            </div>
        </div>
    )
}   

export default AssistantMessage;