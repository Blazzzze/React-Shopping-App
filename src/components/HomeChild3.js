import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

const HomeChild3 = () => {
  const { name, setName } = useContext(HomeContext);
  return (
    <div className="border-2 border-cyan-500 p-6">
      <p>I am a HomeChild3 Component</p>
      <p>Received Value: {name}</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default HomeChild3;