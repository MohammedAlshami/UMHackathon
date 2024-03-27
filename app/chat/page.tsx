"use client";
import React, { useEffect, useState } from "react";
import { fetchOpenAIResponse } from "../components/ChatUtils/ChatUtils";
import ChatContainer from "../components/ChatComponents/ChatContainer";
import ChatBubble from "../components/ChatComponents/BotMessage";
import InputBar from "../components/ChatComponents/InputBar";
import AppLayout from "../components/AppLayout";
interface Message {
  content: string;
  role: string;
}

const IndexPage: React.FC = () => {
  const [userContent, setUserContent] = useState<string>("Hello!");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = async () => {
    setUserContent("");
    const newUserMessage: Message = { content: userContent, role: "user" };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    try {
      const response = await fetchOpenAIResponse(userContent);
      const botMessage: Message = {
        content: response["choices"][0]["message"]["content"],
        role: "bot",
      };
      setMessages([...updatedMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        content: "Error fetching response from OpenAI",
        role: "bot",
      };
      setMessages([...updatedMessages, errorMessage]);
    }

    // Clear the input content after submission
  };

  return (
    <AppLayout>
      <ChatContainer>
        <div>
          {messages.map((message, index) => (
            <div key={index}>
              <ChatBubble user={message.role} headline="">
                {message.content}
              </ChatBubble>
            </div>
          ))}
        </div>
        <InputBar
          onClickHandler={handleSubmit}
          OnChangeHandler={(e) => setUserContent(e.target.value)}
          userContent={userContent}
        />
      </ChatContainer>
    </AppLayout>
  );
};

export default IndexPage;
