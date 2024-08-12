import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <>
      <div className="bg-teal500 p-5 items-center align-middle">
        {val.map((data) => {
          return <h1>{data}</h1>;
        })}
      </div>

      <button
        className="bg-orange-500 rounded-lg p-10"
        onClick={() =>
          setVal(() => {
            return val.filter((data1, index) => index != val.length - 1);
          })
        }
      >
        click me
      </button>
    </>
  );
};

export default App;
