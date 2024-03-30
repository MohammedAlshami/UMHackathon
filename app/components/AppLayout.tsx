"use client";
import React, { ReactNode } from "react";
import { useUrl } from "nextjs-current-url";

interface LayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
  const { href: currentUrl, pathname } = useUrl() ?? {};
  return (
    <>
      <body className="bg-gray-50 dark:bg-slate-900 overflow-y-hidden"  >
        <header className="sticky z-50 top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
          <nav
            className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
            aria-label="Global"
          >
            <div className="me-5 lg:me-0 lg:hidden">
              <a
                className="flex-none text-xl font-semibold dark:text-white"
                href="#"
                aria-label="Brand"
              >
                SlideMap
              </a>
            </div>

            <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
              <div className="sm:hidden">
                <button
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>

              <div className="hidden sm:block">
                <label htmlFor="icon" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <svg
                      className="flex-shrink-0 size-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="icon"
                    name="icon"
                    className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div className="flex flex-row items-center justify-end gap-2">
                <button
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-offcanvas="#hs-offcanvas-right"
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
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </button>

                <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                  <button
                    id="hs-dropdown-with-header"
                    type="button"
                    className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    <img
                      className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-gray-800"
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </button>

                  <div
                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                    aria-labelledby="hs-dropdown-with-header"
                  >
                    <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Signed in as
                      </p>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                        james@site.com
                      </p>
                    </div>
                    <div className="mt-2 py-2 first:pt-0 last:pb-0">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
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
                          stroke-linecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                        Newsletter
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
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
                          stroke-linecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                          <path d="M3 6h18" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        Purchases
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
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
                          stroke-linecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                          <path d="M12 12v9" />
                          <path d="m8 17 4 4 4-4" />
                        </svg>
                        Downloads
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
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
                          stroke-linecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        Team Account
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center py-4">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600"
              data-hs-overlay="#application-sidebar"
              aria-controls="application-sidebar"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle Navigation</span>
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </button>

            <ol
              className="ms-3 flex items-center whitespace-nowrap"
              aria-label="Breadcrumb"
            >
              <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                Application Layout
                <svg
                  className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-gray-600"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li
                className={`text-sm font-semibold text-gray-800 truncate dark:text-gray-400`}
                aria-current="page"
              >
                Dashboard
              </li>
            </ol>
          </div>
        </div>

        <div
          id="application-sidebar"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="px-6">
            <a
              className="flex-none text-xl font-semibold text-blue-600 dark:text-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/account"
              aria-label="Brand"
            >
              <svg className="inline-flex size-12" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.8714 27.0061C47.5044 23.5021 43.5294 21.3691 38.9434 21.2351V27.1631L47.5434 30.5941L50.8714 27.0061Z" fill="#2563EB" />
                <path d="M15.8211 13.763C17.1504 13.763 18.2281 12.6428 18.2281 11.261C18.2281 9.87922 17.1504 8.75903 15.8211 8.75903C14.4917 8.75903 13.4141 9.87922 13.4141 11.261C13.4141 12.6428 14.4917 13.763 15.8211 13.763Z" fill="#2563EB" />
                <path d="M5.66602 12.09L6.34402 11.757L6.59802 10.968L5.92102 11.301L5.66602 12.09Z" fill="#2563EB" />
                <path d="M59.861 42.678C59.455 42.303 58.773 41.923 58.097 41.731C57.081 36.41 54.896 31.708 51.908 28.157L48.274 32.061L50.042 41.517C49.586 41.552 49.141 41.595 48.725 41.638L47.159 32.067L38.255 28.305L29.347 32.067L27.781 41.648C27.3423 41.5998 26.902 41.5678 26.461 41.552L28.238 32.061L26.117 29.787C26.157 29.401 26.195 29.052 26.218 28.901C26.317 28.572 26.405 28.257 26.497 27.934L28.966 30.594L37.583 27.156V21.236C33.66 21.35 30.176 22.936 27.141 25.582C29.458 16.554 29.224 10.362 26.42 7.172C24.622 5.126 21.468 4 17.54 4C11.824 4 4.63502 6.527 2.57202 11.209C1.90402 12.726 1.23202 15.807 4.22802 19.417L5.20702 20.596L5.53402 20.414C5.75702 23.699 7.55402 27.263 14.297 27.263C14.692 27.263 14.803 27.384 14.863 27.451C15.793 28.469 15.597 32.411 15.453 35.29C15.248 39.399 15.054 43.279 16.905 45.306C17.121 45.543 17.364 45.737 17.621 45.909C17.872 47.17 18.427 48.221 19.322 49.094C18.547 51.283 17.969 53.589 17.806 55.548C17.106 56.08 16.238 57.949 16.238 61.105C16.238 62.232 21.177 62.324 21.883 61.232C22.276 61.268 22.696 61.288 23.155 61.288C26.3 61.288 29.999 60.475 30.155 60.439L31.107 60.228L30.869 59.247C30.685 58.494 30.586 57.662 30.539 56.796C32.828 56.761 35.46 56.26 35.46 56.26C35.159 55.194 35.122 53.932 35.214 52.666C37.2741 52.7103 39.335 52.7089 41.395 52.662C40.976 53.725 40.858 54.684 41.303 55.241C42.294 56.474 47.354 56.801 47.354 56.801C47.305 56.175 47.382 55.498 47.522 54.818L47.555 54.875C48.387 56.136 49.346 57.194 50.312 57.963C50.459 58.813 50.842 59.899 51.6 61.119C52.049 61.845 55.137 59.49 55.424 58.307C57.455 56.576 59.562 53.044 60.553 51.256L61.223 50.047L59.9 49.807C58.912 49.628 58.06 49.33 57.349 48.92C58.171 48.054 58.683 47.025 58.908 45.794C59.135 46.055 59.359 46.336 59.573 46.655C60.727 48.378 61.679 50.352 61.947 49.398C62.217 48.444 61.434 44.131 59.861 42.678ZM55.871 47.649C55.7792 47.5359 55.6925 47.4188 55.611 47.298C55.141 46.572 54.908 45.782 54.8 45.065H57.114C56.984 46.052 56.612 46.914 55.871 47.649ZM17.755 43.115C15.85 38.59 19.991 25.311 14.297 25.311C8.79202 25.311 7.38602 22.768 7.38602 19.662C7.38602 19.662 7.86302 19.886 8.75102 19.886C10.172 19.886 12.645 19.313 15.898 16.327C15.679 16.3222 15.46 16.3199 15.241 16.32C8.94702 16.32 5.64802 18.142 5.64802 18.142C-0.200984 11.094 9.55802 5.95 17.54 5.95C20.65 5.95 23.491 6.731 25.032 8.486C28.73 12.693 25.869 23.542 24.401 28.397C24.4 28.401 24.399 28.41 24.397 28.414C22.969 30.227 21.722 32.93 19.817 33.567C18.082 34.148 18.511 38.993 22.409 41.045C22.166 41.839 21.893 42.543 21.588 43.115H17.755ZM23.154 59.335C22.275 59.335 21.657 59.264 21.208 59.169C20.7628 58.2863 20.2347 57.4479 19.631 56.665C19.599 52.445 22.437 45.585 24.262 43.524C24.557 43.504 25.031 43.48 25.595 43.48C27.769 43.48 29.447 43.819 30.329 44.42C29.753 46.541 28.024 53.571 28.847 58.712C27.576 58.95 25.202 59.335 23.154 59.335ZM30.959 50.52C31.106 49.579 31.273 48.686 31.439 47.889C31.527 48.144 31.625 48.396 31.74 48.64C32.081 49.33 32.52 49.957 33.048 50.46C33.118 50.527 33.193 50.589 33.265 50.652C32.4957 50.6196 31.727 50.5756 30.959 50.52ZM42.475 50.679C41.0665 50.7231 39.6573 50.7444 38.248 50.743C36.723 50.743 35.322 50.721 34.024 50.679C33.8329 50.4513 33.6489 50.2179 33.472 49.979C33.0646 49.4264 32.7094 48.8373 32.411 48.219C32.1412 47.661 31.9207 47.0804 31.752 46.484C31.89 45.902 32.011 45.422 32.106 45.066H45.078C45.004 45.473 44.92 45.871 44.818 46.256C44.6361 46.9317 44.3914 47.5889 44.087 48.219C43.7879 48.8371 43.4324 49.4262 43.025 49.979C42.852 50.218 42.664 50.448 42.475 50.679ZM43.232 50.652C43.304 50.589 43.378 50.527 43.449 50.46C43.9877 49.9339 44.4306 49.318 44.758 48.64C44.886 48.367 44.994 48.082 45.089 47.795C45.166 48.709 45.317 49.621 45.567 50.517C44.7895 50.5747 44.011 50.6197 43.232 50.652ZM53.98 57.047C52.828 56.471 51.779 56.181 51.134 56.129C50.3549 55.4357 49.6713 54.6421 49.101 53.769C48.136 52.305 46.087 48.485 47.227 43.782C48.277 43.64 50.5 43.371 52.238 43.371C52.46 43.371 52.666 43.376 52.855 43.384C52.785 44.583 52.891 46.58 54.041 48.368C54.976 49.822 56.395 50.843 58.273 51.417C56.715 54.028 55.01 56.253 53.98 57.047Z" fill="#2563EB" />
              </svg>
              WIISE
            </a>
          </div>

          <nav
            className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open
          >
            <ul className="space-y-1.5">
              <li>
                <a
                  className={`flex items-center gap-x-3.5 py-2 px-2.5 ${pathname === "/profile" ? "bg-gray-100" : ""
                    } text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                  href="/account"
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
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Home
                </a>
              </li>


            </ul>
          </nav>
        </div>

        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 ">
          {children}
        </div>
      </body>
    </>
  );
};

export default AppLayout;
