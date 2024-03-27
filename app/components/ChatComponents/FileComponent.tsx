import React from "react";

interface FileComponentProps {
    FileName: string;
  }
  

const FileComponent: React.FC<FileComponentProps> = ({ FileName }) => {
  return (
    <>
      <li className="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
        <div className="w-full flex justify-between truncate">
          <span className="me-3 flex-1 w-0 truncate">
            {FileName}
          </span>
          <button
            type="button"
            className="flex items-center gap-x-2 text-gray-500 hover:text-blue-500 whitespace-nowrap dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Download
          </button>
        </div>
      </li>
    </>
  );
};

export default FileComponent;
