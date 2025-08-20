const Chatbot = () => {
  const VITE_AGENT_ID = import.meta.env.VITE_AGENT_ID;
  return (
    <df-messenger
      intent="WELCOME"
      chat-title="ZomatoChatbot"
      agent-id={VITE_AGENT_ID}
      language-code="en"
      chat-icon="bot-5.png"
    ></df-messenger>
  );
};

export default Chatbot;
