"use client";
import React, { useEffect, useState, useRef } from "react";
import { fetchOpenAIResponse } from "../components/ChatUtils/ChatUtils";
import ChatContainer from "../components/ChatComponents/ChatContainer";
import ChatBubble from "../components/ChatComponents/BotMessage";
import InputBar from "../components/ChatComponents/InputBar";
import AppLayout from "../components/AppLayout";
import AnalysisComponent from "../components/Graphs/AnalysisComponent";
import { renderMarkdown } from "../components/ChatUtils/MarkdownRender";
import useClientLogic from "../test/useClientLogic";

interface Message {
  content: string;
  role: string;
}

const IndexPage: React.FC = () => {
  // Transcription Logic Variables
  const { startRecording, stopRecording, error, transcribedText } =
    useClientLogic();
  const [isRecording, setIsRecording] = useState(false);
  const [isSvgRed, setIsSvgRed] = useState(false); // State variable to track SVG color

  const toggleRecording = () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
    setIsRecording(!isRecording);
    setIsSvgRed(!isRecording); // Toggle SVG color back to blue if isRecording is true

    // if (isRecording) {
    //   handleSubmit(transcribedText); // Call handleSubmit only when recording is stopped
    // }
  };

  // Message Handling
  const [userContent, setUserContent] = useState<string>("");
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
    const newUserMessage: Message = {
      content: userContent,
      role: "user",
    };
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

      const response = await fetchOpenAIResponse(newUserMessage.content);
      const botMessage: Message = {
        content: await renderMarkdown(response["content"]),
        role: "bot",
      };
      // Remove the loading message and add the bot message
      const updatedMessagesWithBotMessage = messagesWithLoading
        .slice(0, -1)
        .concat(botMessage);
      setMessages(updatedMessagesWithBotMessage);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        content: "Error fetching response from OpenAI",
        role: "bot",
      };
      // Replace the loading message with the error message
      const updatedMessagesWithError = messages
        .slice(0, -1)
        .concat(errorMessage);
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

  useEffect(() => {
    if (transcribedText) {
      setUserContent((prevUserContent) => prevUserContent + transcribedText);
    }
  }, [transcribedText]);
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
          <div ref={messagesEndRef} />{" "}
          {/* This div will be scrolled into view */}
        </div>
      </ChatContainer>

      
      <InputBar
        onClickHandler={handleSubmit}
        OnChangeHandler={(e) => setUserContent(e.target.value)}
        userContent={userContent}
        onKeyDownHandler={handleKeyDown}
      >
<>
        {error && <div>{error}</div>}
        <button
          type="button"
          className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          onClick={toggleRecording}
        >
          <svg
            className={`flex-shrink-0 size-4 ${
              isSvgRed ? "text-red-500" : "text-blue-500"
            }`} // Toggle SVG color based on state
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" x2="12" y1="19" y2="22"></line>
          </svg>
        </button>
      </>
      </InputBar>

    </AppLayout>
  );
};

export default IndexPage;
