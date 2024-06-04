// import { useAuthContext } from "../../context/AuthContext";
// import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

const Message = () => {
  return (
    // <div className={`chat ${chatClassName}`}>
    //   <div className="chat-image avatar">
    //     <div className="w-10 rounded-full">
    //       <img alt="Tailwind CSS chat bubble component" src={profilePic} />
    //     </div>
    //   </div>
    //   <div
    //     className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
    //   >
    //     {message.message}
    //   </div>
    //   <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
    //     {formattedTime}
    //   </div>
    // </div>

    <div className={`chat`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full"></div>
      </div>
      <div className={`chat-bubble text-white  pb-2`}> hello guyz</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:24
      </div>
    </div>
  );
};
export default Message;
