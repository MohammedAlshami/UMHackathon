import React from "react";

const ProgressBar = () => {

    return (
        <>
            {/* <!-- Progress --> */}
            <div>
                <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white pt-3">Necessaties</h3>
                    <span className="text-sm text-gray-800 dark:text-white pt-3">-25%</span>
                </div>
                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar">
                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-red-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-red-500 w-full"></div>
                </div>
            </div>
            {/* <!-- End Progress --> */}

            {/* <!-- Progress --> */}
            <div>
                <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white pt-3">Desires</h3>
                    <span className="text-sm text-gray-800 dark:text-white pt-3">50%</span>
                </div>
                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar">
                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-1/2"></div>
                </div>
            </div>
            {/* <!-- End Progress --> */}

            {/* <!-- Progress --> */}
            <div>
                <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white pt-3">Savings</h3>
                    <span className="text-sm text-gray-800 dark:text-white pt-3">100%</span>
                </div>
                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar">
                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-green-500 w-full"></div>
                </div>
            </div>
            {/* <!-- End Progress --> */}
        </>
    );
};

export default ProgressBar;
