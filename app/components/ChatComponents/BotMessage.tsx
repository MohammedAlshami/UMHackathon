import React from "react";

interface BotMessageProps {
  headline: string;
  user: string;
  children: React.ReactNode;
}

const ChatBubble: React.FC<BotMessageProps> = ({
  headline,
  user,
  children,
}) => {
  return (
    <>
      {user === "bot" ? (
        <>
          <li className="flex gap-x-2 sm:gap-x-4 py-8">
            <svg
              className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="38" height="38" rx="6" fill="#2563EB" />
              <path
                d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
                stroke="white"
                stroke-width="1.5"
              />
              <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
            </svg>

            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
              <div className="space-y-3">
                {headline && (
                  <h2 className="font-medium text-gray-800 dark:text-white">
                    {headline}
                  </h2>
                )}
                <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                  {children}
                </p>
              </div>
            </div>
          </li>
        </>
      ) : (
        <>
          <li className="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4">
            <div className="grow text-end space-y-3">
              <div className="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
                <div className="space-y-3">
                  {headline && (
                    <h2 className="font-medium text-white dark:text-white">
                      {headline}
                    </h2>
                  )}
                  <p className="mb-1.5 text-sm text-white  dark:text-white">
                    {children}
                  </p>
                </div>
              </div>
            </div>

            <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
              <span className="text-sm font-medium text-white leading-none">
                AZ
              </span>
            </span>
          </li>
        </>
      )}
    </>
  );
};

export default ChatBubble;
