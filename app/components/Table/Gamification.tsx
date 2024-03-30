import React from "react";

export const Gamification = () => {
    return (
        // <!-- Table Section -->
        <div className="max-w-[85rem]">
            {/* <!-- Card --> */}
            <div className="flex flex-col">
                <div >
                    <div className=" max-w-full">
                        <div>
                            {/* <!-- Header --> */}
                            <div className=" py-4 grid  md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                        Leadership Board
                                    </h2>
                                    <p className="text-sm text-blue-600 dark:text-blue-600">
                                        Save more, win more points!
                                    </p>
                                </div>

                                <div>
                                    <div className="inline-flex gap-x-2">
                                        <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                            View all
                                        </a>

                                        <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                            <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                            </svg>
                                            Add Competitor
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Header --> */}

                            {/* <!-- Table --> */}
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-slate-800">
                                    <tr>
                                        <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className=" px-3 text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Name
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-end">
                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Points
                                            </span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="size-px whitespace-nowrap">
                                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                <div className="flex items-center gap-x-3 px-3">
                                                    <span className="inline-flex items-center justify-center size-[38px] rounded-full bg-gray-300 dark:bg-gray-700">
                                                        <span className="font-medium text-gray-800 leading-none dark:text-gray-200">A</span>
                                                    </span>
                                                    <div className="grow">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Nur Adilah</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="size-px whitespace-nowrap text-end">
                                            <div className="px-6 py-1.5">
                                                <a className="inline-flex items-center gap-x-1 text-sm text-green-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                    +80
                                                    <span className="text-black">pts</span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="size-px whitespace-nowrap">
                                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                <div className="flex items-center gap-x-3 px-3">
                                                    <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                                    <div className="grow">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Aisya Batrisyia</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="size-px whitespace-nowrap text-end">
                                            <div className="px-6 py-1.5">
                                                <a className="inline-flex items-center gap-x-1 text-sm text-green-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                    +20
                                                    <span className="text-black">pts</span>
                                                </a>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className="size-px whitespace-nowrap">
                                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                <div className="flex items-center gap-x-3 px-3">
                                                    <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                                    <div className="grow">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Shamina Eheh</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="size-px whitespace-nowrap text-end">
                                            <div className="px-6 py-1.5">
                                                <a className="inline-flex items-center gap-x-1 text-sm text-red-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                    -100
                                                    <span className="text-black">pts</span>
                                                </a>
                                            </div>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                            {/* <!-- End Table --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Card --> */}
        </div>) /* <!-- End Table Section --> */;
    { /* <!-- End Table Section --> */ }
};
