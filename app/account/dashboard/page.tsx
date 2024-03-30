'use client';
import React from "react";
import AppLayout from "../../components/AppLayout";
import PieGraph from "../../components/Charts/PieGraph";
import LineGraph from "../../components/Charts/LineGraph";
import {
    Gamification
} from "../../components/Table/Gamification";

import Transaction from "../../components/Table/Transaction";
import ProgressBar from "@/app/components/Charts/ProgressBar";

const Page = () => {

    return (

        <AppLayout>
            <h1 className="font-semibold dark:group-hover:text-gray-400 dark:text-white text-4xl mb-5">
                Dashboard
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3 sm:gap-6">

                <div className="group flex flex-col p-4 md:p-5 bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    {/* <!-- Header --> */}
                    <div className=" py-4 grid  md:flex md:justify-between md:items-center">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Monthly Spending
                            </h2>
                            <p className="text-sm text-blue-600 dark:text-blue-600">
                                How much did you spend this month?
                            </p>
                        </div>

                        <div>
                            <div className="inline-flex gap-x-2">
                                <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="./setBudget">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.707 2.29279C17.5195 2.10532 17.2652 2 17 2C16.7348 2 16.4805 2.10532 16.293 2.29279L14 4.58579L12.707 3.29279C12.5195 3.10532 12.2652 3 12 3C11.7348 3 11.4805 3.10532 11.293 3.29279L5.293 9.29279C5.11084 9.48139 5.01005 9.73399 5.01233 9.99619C5.0146 10.2584 5.11977 10.5092 5.30518 10.6946C5.49059 10.88 5.7414 10.9852 6.0036 10.9875C6.2658 10.9897 6.5184 10.8889 6.707 10.7068L12 5.41379L12.586 5.99979L10.293 8.29279L3.293 15.2928C3.10545 15.4803 3.00006 15.7346 3 15.9998V19.9998C3 20.265 3.10536 20.5194 3.29289 20.7069C3.48043 20.8944 3.73478 20.9998 4 20.9998H8C8.26519 20.9997 8.51951 20.8943 8.707 20.7068L15.707 13.7068L21.707 7.70679C21.8945 7.51926 21.9998 7.26495 21.9998 6.99979C21.9998 6.73462 21.8945 6.48031 21.707 6.29279L17.707 2.29279ZM14.707 6.70679L17 4.41379L19.586 6.99979L15 11.5858L12.414 8.99979L14.707 6.70679ZM5 16.4138L11 10.4138L13.586 12.9998L7.586 18.9998H5V16.4138Z" fill="white" />
                                    </svg>
                                    Set Budget
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Header --> */}
                    <div className="items-center"></div>
                    <PieGraph></PieGraph>
                    <div className="py-6">
                        <ProgressBar></ProgressBar>
                    </div>

                </div>
                <div className="group flex flex-col p-4 md:p-5 bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <Gamification></Gamification>
                </div>

            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-6 mt-5">
                <div className="group flex flex-col p-4 md:p-5 bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <div className=" py-4 grid  md:flex md:justify-between md:items-center">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Monthly Saving
                            </h2>
                            <p className="text-sm text-blue-600 dark:text-blue-600">
                                How much did you save this month?
                            </p>
                        </div>
                    </div>
                    <LineGraph></LineGraph>
                </div>
                <div className="group flex flex-col mb-10 p-4 md:p-5 bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <div className=" py-4 grid  md:flex md:justify-between md:items-center">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Transaction Summary
                            </h2>
                            <p className="text-sm text-blue-600 dark:text-blue-600">
                                Did you stick to you budget or did you go over your budget for each category?
                            </p>
                        </div>
                    </div>
                    <Transaction></Transaction>
                </div>
            </div>
        </AppLayout>
    );
};

export default Page;