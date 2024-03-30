// MyPage.js
'use client';
import React from "react";
import AppLayout
    from "@/app/components/AppLayout";
import BudgetForm from "@/app/components/Form/BudgetForm";

const Page = () => {

    return (
        <AppLayout>
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Set Your Budget</h2>
                <p className="mt-1 text-blue-600 dark:text-blue-600">For every category listed below, input how much you put aside for this area?</p>
            </div>
            <BudgetForm></BudgetForm>
        </AppLayout>

    );
};

export default Page;
