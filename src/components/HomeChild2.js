import React from "react";
import HomeChild3 from "./HomeChild3";

const HomeChild2 = () => {
  return (
    <div className="border-2 border-lime-900 p-6">
      <p>I am a HomeChild2 Component</p>
      <HomeChild3 />
    </div>
  );
};

export default HomeChild2;