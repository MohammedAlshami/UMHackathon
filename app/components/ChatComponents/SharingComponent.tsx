import React from "react";

const SharingComponent = () => {
  return (
    <div>
      <div>
        <div className="sm:flex sm:justify-between">
          <div>
            <div className="inline-flex border border-gray-200 rounded-full p-0.5 dark:border-gray-700">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M17 14V2" />
                  <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                </svg>
              </button>
            </div>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 size-4"
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
                <path d="M17 14V2" />
                <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
              </svg>
              Copy
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 size-4"
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
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
              Share
            </button>
          </div>

          <div className="mt-1 sm:mt-0">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 size-4"
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
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
              New answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharingComponent;
