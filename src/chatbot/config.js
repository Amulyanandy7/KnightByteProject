import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "KnightBot",
  initialMessages: [
    createChatBotMessage("Hi there! I'm KnightBot. How can I help you today?"),
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#C77BF4" },
    userMessageBox: { backgroundColor: "#FF5672" },
    chatButton: { backgroundColor: "#C77BF4" },
  },
};

export default config;
