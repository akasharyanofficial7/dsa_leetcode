import React from "react";

const Task1 = ({ card, color }) => {
  return (
    <>
      <button className={`bg-teal-500 mt-10 ${color}`}>{card}</button>
    </>
  );
};

export default Task1;
