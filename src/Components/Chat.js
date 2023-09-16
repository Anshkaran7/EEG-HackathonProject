// // Chat.js

// import React, { useState } from "react";

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   const handleSendMessage = () => {
//     // Add the new message to the messages state
//     setMessages([...messages, { text: newMessage, sender: "user" }]);
//     // Clear the input field
//     setNewMessage("");
//   };

//   return (
//     <div className="h-44 bg-red-300 rounded-xl shadow-md">
//       <div className="chat-messages">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div className="mt-10 flex flex-col">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button className="bg-white shadow-md" onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chat;
