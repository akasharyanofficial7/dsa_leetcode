import React, { useState } from "react";
import Task1 from "./Task1";

const App = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <>
      <div>
        <div className="from-orange-600">
          {data.map((val) => {
            return (
              <h2 className="text-orange-600 text-center font-bold text-2xl">
                {val}
              </h2>
            );
          })}
        </div>

        <button
          className="bg-teal-500 p-5 text-center items-center"
          onClick={() =>
            setData(() =>
              data.filter((item, index) => index != data.length - 1)
            )
          }
        >
          click me
        </button>

        <button
          className="bg-teal-500 p-5 ml-6"
          onClick={() => setData([...data, 7])}
        >
          click to add
        </button>
      </div>

      <Task1 card="click it" color="bg-green-600" />
    </>
  );
};

export default App;
