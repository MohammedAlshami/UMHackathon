'use client';
import React from "react";
import AppLayout from "@/app/components/AppLayout";
import AccountForm from "@/app/components/Form/AccountForm";

const Page = () => {

    return (

        <AppLayout>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* <!-- Title --> */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Account Setup</h2>
                    <p className="mt-1 text-blue-600 dark:text-blue-600">Input all necessary information for a smooth experience</p>
                </div>
                {/* <!-- End Title --> */}
                <AccountForm></AccountForm>
            </div>
        </AppLayout>
    );
};

export default Page;