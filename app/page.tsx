import Image from "next/image";
import ChatContainer from "./components/ChatComponents/ChatContainer";
import ChatBubble from "./components/ChatComponents/BotMessage";
export default function Home() {
  return (
    <>
      <ChatContainer>
        <ChatBubble image="" headline="" user="bot">
          <div className="space-y-3">
            <h2 className="font-medium text-gray-800 dark:text-white">
              How can we help?
            </h2>
            <div className="space-y-1.5">
              <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                You can ask questions like:
              </p>
              <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                <li className="text-sm text-gray-800 dark:text-white">
                  Whats Preline UI?
                </li>

                <li className="text-sm text-gray-800 dark:text-white">
                  How many Starter Pages & Examples are there?
                </li>

                <li className="text-sm text-gray-800 dark:text-white">
                  Is there a PRO version?
                </li>
              </ul>
            </div>
          </div>
        </ChatBubble>
        
      </ChatContainer>
    </>
  );
}
