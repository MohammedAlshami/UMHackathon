import React, { useState } from "react";

const BudgetForm = () => {
    const [toggle, setToggle] = useState(1);
    const [checkedItems, setCheckedItems] = useState({
        1: true,
        2: false,
        3: false
    });

    // Function to handle tab item click
    const handleTabClick = (index) => {
        setToggle(index);
        const updatedCheckedItems = {};
        for (let key in checkedItems) {
            updatedCheckedItems[key] = false;
        }
        updatedCheckedItems[index] = true;
        setCheckedItems(updatedCheckedItems);
    };
    return (
        <>
            {/* <!-- Card Section --> */}
            <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
                {/* <!-- Card --> */}
                <div className="mb-10 border bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                    <div role="tablist" className="tabs tabs-lifted">
                        <input onClick={() => handleTabClick(1)} type="radio" id="tab1" name="my_tabs_2" role="tab" className="tab" aria-label="Necessities" checked={checkedItems[1]} />
                        <div id="tab-content1" role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <div className=" py-4 grid  md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                <div>
                                    <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-600">
                                        Percentage
                                    </h2>
                                </div>

                                <div>
                                    <div className="inline-flex gap-x-2">
                                        <input id="af-account-email" type="text" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="50%" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" py-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Groceries
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" pb-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Utilities
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" pb-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Health & Fitness
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" pb-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Transportation
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className=" pb-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Debts & Overpayments
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" pb-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Insurance
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" pb-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Government Services
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input onClick={() => handleTabClick(2)} type="radio" id="tab2" name="my_tabs_2" role="tab" className="tab" aria-label="Desires" checked={checkedItems[2]} />
                        <div id="tab-content2" role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <div className="py-4 grid  md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                <div>
                                    <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-600">
                                        Percentage
                                    </h2>
                                </div>

                                <div>
                                    <div className="inline-flex gap-x-2">
                                        <input id="af-account-email" type="text" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="30%" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" py-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Shopping
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" pb-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Entertainment
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" pb-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Dining
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" pb-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Travel
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" pb-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Other Expenses
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input onClick={() => handleTabClick(3)} type="radio" id="tab3" name="my_tabs_2" role="tab" className="tab" aria-label="Savings" checked={checkedItems[3]} />
                        <div id="tab-content3" role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <div className=" py-4 grid  md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                <div>
                                    <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-600">
                                        Percentage
                                    </h2>
                                </div>

                                <div>
                                    <div className="inline-flex gap-x-2">
                                        <input id="af-account-email" type="text" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="20%" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" py-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Put Aside
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" pb-4 grid  md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-md text-gray-500 dark:text-gray-200">
                                            Investment
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <input id="af-account-email" type="number" className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="RM" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-x-2 sm:px-7 dark:border-gray-700 pt-8">
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-notifications">
                            Cancel
                        </button>
                        <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="./dashboard">
                            Save Changes
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BudgetForm;
