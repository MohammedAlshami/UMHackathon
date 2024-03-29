// MyPage.js
'use client';
import React from "react";
import BarGraph from "../components/Charts/BarGraph";
import PieGraph from "../components/Charts/PieGraph";
import LineGraph from "../components/Charts/LineGraph";
const Page = () => {

  return(
    <div className="grid grid-cols-3">
        <BarGraph></BarGraph>
        <PieGraph></PieGraph>
        <LineGraph></LineGraph>
    </div>
  );
};

export default Page;
