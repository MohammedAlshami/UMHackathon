'use client';
import React from "react";
import AppLayout from "../../components/AppLayout";
import PieGraph from "../../components/Charts/PieGraph";
import LineGraph from "../../components/Charts/LineGraph";
import {
    Gamification
} from "../../components/Table/Gamification";

import Transaction from "../../components/Table/Transaction";

const Page = () => {

    return (

        <AppLayout>
            <h1 className="font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200 text-4xl mb-5">
                        Dashbaord
                    </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3 sm:gap-6">
            
                <div className="group flex flex-col p-4 md:p-5 bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <h3 className="font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200 text-xl ">
                        Montly Spending
                    </h3>
                    <PieGraph></PieGraph>
                </div>
                <div className="group flex flex-col p-4 md:p-5 bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <Gamification></Gamification>
                </div>

            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-6 mt-5">
                <div className="group flex flex-col p-4 md:p-5 bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <h3 className="font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200 text-xl ">
                        Montly Saving
                    </h3>
                    <LineGraph></LineGraph>
                </div>
                <div className="group flex flex-col p-4 md:p-5 bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <h3 className="font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200 text-xl ">
                        Transaction History
                    </h3>
                    <Transaction></Transaction>
                </div>
            </div>
        </AppLayout>
    );
};

export default Page;