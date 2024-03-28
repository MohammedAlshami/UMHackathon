import { useState } from "react";
import useClientLogic from "./useClientLogic";

const MyPageUI = () => {
  const { startRecording, stopRecording, error, transcribedText } = useClientLogic();
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
  };

  return (
    <>
      {error && <div>{error}</div>}
      <button
        type="button"
        className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={toggleRecording}
      >
        <svg
          className={`flex-shrink-0 size-4 ${isSvgRed ? 'text-red-500' : 'text-blue-500'}`} // Toggle SVG color based on state
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
      {transcribedText && (
        <div>
          Transcribed Text: {transcribedText}
        </div>
      )}
    </>
  );
};

export default MyPageUI;
