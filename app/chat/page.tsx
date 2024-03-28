'use client';
import React, { useEffect, useState, useRef } from "react";
import { fetchOpenAIResponse } from "../components/ChatUtils/ChatUtils";
import ChatContainer from "../components/ChatComponents/ChatContainer";
import ChatBubble from "../components/ChatComponents/BotMessage";
import InputBar from "../components/ChatComponents/InputBar";
import AppLayout from "../components/AppLayout";
import AnalysisComponent from "../components/Graphs/AnalysisComponent";
import { renderMarkdown } from "../components/ChatUtils/MarkdownRender";

interface Message {
  content: string;
  role: string;
}

const IndexPage: React.FC = () => {
  const [userContent, setUserContent] = useState<string>("Hello!");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setUserContent("");
    const newUserMessage: Message = { content: userContent, role: "user" };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
  
    try {
      // Add a loading message to the messages array
      const loadingMessage: Message = {
        content: "Loading...",
        role: "bot",
      };
      const messagesWithLoading = [...updatedMessages, loadingMessage];
      setMessages(messagesWithLoading);
  
      const response = await fetchOpenAIResponse(userContent);
      const botMessage: Message = {
        content: await renderMarkdown(response["content"]),
        role: "bot",
      };
      // Remove the loading message and add the bot message
      const updatedMessagesWithBotMessage = messagesWithLoading.slice(0, -1).concat(botMessage);
      setMessages(updatedMessagesWithBotMessage);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        content: "Error fetching response from OpenAI",
        role: "bot",
      };
      // Replace the loading message with the error message
      const updatedMessagesWithError = messages.slice(0, -1).concat(errorMessage);
      setMessages(updatedMessagesWithError);
    } finally {
      setLoading(false); // Set loading to false after receiving the response
    }
  };
  

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom when component initially renders
  }, [messages]);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <AppLayout>
      <ChatContainer>
        <div id="messages">
          {/* <ChatBubble user="bot" headline="">
            <div className="py-12">
              <AnalysisComponent></AnalysisComponent>
            </div>
          </ChatBubble> */}
          {messages.map((message, index) => (
            <div key={index}>
              <ChatBubble user={message.role} headline="">
                {/* Render the markdown content */}
                {/* {loading && message.role === "bot" && <p>Loading...</p>} */}
                <div dangerouslySetInnerHTML={{ __html: message.content }} />
              </ChatBubble>
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* This div will be scrolled into view */}
        </div>
       
      </ChatContainer>
      <InputBar
          onClickHandler={handleSubmit}
          OnChangeHandler={(e) => setUserContent(e.target.value)}
          userContent={userContent}
          onKeyDownHandler={handleKeyDown}
        />
    </AppLayout>
  );
};

export default IndexPage;
