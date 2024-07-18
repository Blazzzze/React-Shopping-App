import React from "react";
import HomeChild2 from "./HomeChild2";

const HomeChild1 = ({ name }) => {
  return (
    <div className="border-2 border-amber-500 p-6">
      <p>I am a HomeChild1 Component</p>
      <HomeChild2 />
    </div>
  );
};

export default HomeChild1;