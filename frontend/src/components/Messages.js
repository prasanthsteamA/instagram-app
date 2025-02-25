import React, { useEffect, useState } from "react";
import axios from "axios";

const Messages = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/messages/conversations", { withCredentials: true })
      .then(response => setConversations(response.data.data))
      .catch(error => console.error("Error fetching conversations:", error));
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      {conversations.map(conv => (
        <div key={conv.id}>
          <p><strong>Conversation ID:</strong> {conv.id}</p>
          <button onClick={() => alert("Reply feature coming soon!")}>Reply</button>
        </div>
      ))}
    </div>
  );
};

export default Messages;
