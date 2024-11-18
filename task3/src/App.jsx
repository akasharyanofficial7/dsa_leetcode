import React, { useState } from "react";
import Form from "./Form";
import ApiTask from "./Apitask";
const App = () => {
  const value = [];
  const [data, setData] = useState(value);

  const [val, setVal] = useState("");
  const deleteList = (index) => {
    const copyArray = [...data];

    copyArray.splice(index, 1);
    setData(copyArray);
    console.log(copyArray);
  };

  const createList = () => {
    setData([val, ...data]);
  };
  return (
    <div>
      <ul>
        {data.map((val, index) => (
          <li>
            {val}
            <button onClick={() => deleteList(index)}>delete </button>
          </li>
        ))}
      </ul>

      <input onChange={(e) => setVal(e.target.value)} />

      <button onClick={createList}>Add</button>

      <h2>{val}</h2>
      <Form />
      <ApiTask />
    </div>
  );
};

export default App;
