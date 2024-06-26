import React, { useState } from "react";

import { BarChart, LineChart, PieChart, pieArcLabelClasses} from "@mui/x-charts";
interface OptionsContainerProps {
  values: string[];
}

const OptionsContainer: React.FC<OptionsContainerProps> = ({ values }) => {
  const [graphType, setGraphType] = useState("none");

  const handleButtonClick = (type) => {
    setGraphType(type);
  };
  const cat = [
    "Income/Salary",
    "Utilities",
    "Other Expenses",
    "Government Services",
    "Groceries",
  ];
  const vals = [100000.0, 50000.0, 4000.0, 20000.0, 8130.0];

  return (
    <div className="w-full">
      {graphType === "Spending Habits" && (
        <div>
          <LineChart
            xAxis={[{ data: [1, 2, 3] }]}
            series={[
              {
                data: [195117.0, 199137.0, 218317.0],
              },
            ]}
            height={300}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
          <p className="py-4 text-md">
            The graph displays spending over three months. In January, about
            $195,117 was spent. This increased to around $199,137 in February,
            and then jumped to approximately $218,317 in March. So, spending
            went up each month, starting from $195,117 in January and ending at
            $218,317 in March, indicating an overall increase of about 11.88%.
          </p>
        </div>
      )}
      {graphType === "Spending Breakdown" && (
        <div className="p-12">
          <PieChart
            slotProps={{
              legend: {
                direction: "column",
                position: { vertical: "top", horizontal: "right" },
                padding: 0,
                
              },
            }}
            series={[
              {
                
                arcLabel: (item) => `RM ${item.value}`, // Customizing arc label
                arcLabelMinAngle: 20, // Setting minimum angle for displaying arc label
                data: vals.map((val, idx) => ({
                  id: idx,
                  value: val,
                  label: cat[idx],
                })),
                
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white", // Setting color of arc label text
                fontWeight: "bold", // Making arc label text bold
              },
            }}
            height={300}
            width={650}
          />
        </div>
      )}
      {graphType === "Risk vs. Return" && (
        <BarChart
          series={[
            { data: [30, 40, 50, 60] },
            { data: [20, 30, 40, 50] },
            { data: [10, 20, 30, 40] },
          ]}
          height={300}
          xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      )}
      <div className="w-full">
        {values.map((value, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleButtonClick(value)}
            className="w-full mb-2.5 me-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 text-sm dark:bg-slate-900 dark:text-blue-500 dark:border-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionsContainer;
