"use client";
import React, { useEffect, useState, useRef } from "react";
import { fetchOpenAIResponse } from "./components/ChatUtils/ChatUtils";
import ChatContainer from "./components/ChatComponents/ChatContainer";
import ChatBubble from "./components/ChatComponents/BotMessage";
import InputBar from "./components/ChatComponents/InputBar";
import AppLayout from "./components/AppLayout";
import AnalysisComponent from "./components/Graphs/AnalysisComponent";
import { renderMarkdown } from "./components/ChatUtils/MarkdownRender";
import useClientLogic from "./test/useClientLogic";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";

interface Message {
  content: string;
  role: string;
}

const IndexPage: React.FC = () => {
  const [isChart, setIsChart] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isNineKeyPressed, setIsNineKeyPressed] = useState(false);
  const [isaccessible, setAccessible] = useState(false);
  const [language, setLanguage] = useState("english"); // State variable for language selection

  const handleAudioPlay = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

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
  const generateAudioForResponse = async (content: string) => {
    const hiMessage = `${content}`;

    try {
      const audioResponse = await fetch(
        "https://api.openai.com/v1/audio/speech",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "tts-1-hd",
            input: hiMessage,
            voice: "alloy",
          }),
        }
      );
      const audioData = await audioResponse.arrayBuffer();
      const blob = new Blob([audioData], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(blob);
      return audioUrl;
    } catch (error) {
      console.error("Error generating audio:", error);
      return null; // Return null in case of error
    }
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

      const hiMessage = `you have to speak ${language} with me below is my prompt: ${userContent}`;
      const response = await fetchOpenAIResponse(hiMessage);
      let botMessage: Message;
      if (response.isGraph) {
        setIsChart(true);

        botMessage = {
          content: response.content,
          role: "bot",
        };
      } else {
        setIsChart(false);
        botMessage = {
          content: response.content,
          role: "bot",
        };
      }
      const audioUrl = await generateAudioForResponse(response.content);
      setAudio(audioUrl);
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
  // Function to handle "9" key press
  const handleNineKeyPress = (e: KeyboardEvent) => {
    if (e.code === "Space") {
      setIsNineKeyPressed(true); // Set isNineKeyPressed to true when "9" key is pressed
    }
  };

  useEffect(() => {
    if (isNineKeyPressed) {
      toggleRecording();
      setIsNineKeyPressed(false); // Reset isNineKeyPressed
    }
  }, [isNineKeyPressed]);

  useEffect(() => {
    window.addEventListener("keydown", handleNineKeyPress); // Add event listener for keydown

    if (isaccessible) {
      window.addEventListener("keydown", handleNineKeyPress);
    } else {
      window.removeEventListener("keydown", handleNineKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleNineKeyPress);
    };
  }, [isaccessible]);

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom when component initially renders
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("hello world!");
    // if (e.key === "Enter") {
    //   handleSubmit();
    // }
  };

  useEffect(() => {
    if (transcribedText) {
      setUserContent((prevUserContent) => prevUserContent + transcribedText);
    }
  }, [transcribedText]);

  useEffect(() => {
    if (transcribedText && userContent) {
      handleSubmit(); // Call handleSubmit when userContent is updated
    }
  }, [userContent]);
  useEffect(() => {
    if (isaccessible && audio) {
      handleAudioPlay(audio);
    }
  }, [isaccessible, audio]);

  const handleToggleChange = () => {
    setAccessible(true);
  };

  return (
    <AppLayout>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4 flex flex-col space-y-6">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isaccessible}
                onChange={handleToggleChange}
                class="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Blind Accessibility
              </span>
            </label>
            <form className="">
              <label
                htmlFor="languages"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a language
              </label>
              <select
                id="languages"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={language}
                onChange={handleLanguageChange} // Call handleLanguageChange on select change
              >
                <option value="english">English</option>
                <option value="malay">Malay</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
                <option value="arabic">arabic</option>
              </select>
            </form>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
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

                <div className="flex flex-row gap-22 items-center">
                  {isChart ? (
                    <div>{message.content}</div>
                  ) : (
                    <div>
                       {message.content}
                    </div>
                  )}
                  {/* {message.role === "bot" && audio && (
                    <div>
                      <button
                        type="button"
                        className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                        onClick={() => handleAudioPlay(audio)}
                      >
                        <svg
                          className={`flex-shrink-0 size-10 ${
                            isSvgRed ? "text-red-500" : "text-blue-500"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9.608 1.517c.77-.175 1.57-.267 2.392-.267c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.622-.092-2.392-.267a.75.75 0 1 1 .332-1.463a9.25 9.25 0 1 0 0-18.04a.75.75 0 1 1-.332-1.463M7.314 3.132a.75.75 0 0 1-.235 1.034A9.303 9.303 0 0 0 4.166 7.08a.75.75 0 0 1-1.27-.8A10.803 10.803 0 0 1 6.28 2.897a.75.75 0 0 1 1.035.235M2.98 9.94a.75.75 0 1 0-1.463-.332c-.175.77-.267 1.57-.267 2.392c0 .822.092 1.622.267 2.393a.75.75 0 0 0 1.463-.333A9.283 9.283 0 0 1 2.75 12c0-.709.08-1.398.23-2.06m.152 6.746a.75.75 0 0 1 1.034.235a9.302 9.302 0 0 0 2.913 2.913a.75.75 0 0 1-.8 1.27a10.804 10.804 0 0 1-3.382-3.383a.75.75 0 0 1 .235-1.035"></path>
                          <path d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"></path>
                        </svg>
                      </button>
                    </div>
                  )} */}
                </div>
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
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Accessibility
        </button>

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
