import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Soccer", "Cricket", "Cooking", "News", "Music", "Bollywood", "Mantras", "Love Songs", "Motivation"];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll no-scrollbar">
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
