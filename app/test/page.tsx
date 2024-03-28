// MyPage.js
'use client';
import React from "react";
import LogicComponent from "./TranscriptionUI";
import UIComponent from "./UIComponent";
import dynamic from "next/dynamic";
// const DynamicUIComponent = dynamic(() => import("./page1"), { ssr: false });
// const DynamicLogicComponent = dynamic(() => import("./UIComponent"), { ssr: false });
// import MyPage from "./TranscriptionUI";
import TranscriptionUI from "./TranscriptionUI";

const Page = () => {

  return(
    <TranscriptionUI></TranscriptionUI>
  );
};

export default Page;
