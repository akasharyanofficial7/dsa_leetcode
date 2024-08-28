import React, { useState } from "react";

const App = () => {
  const [play, setPlay] = useState(true);
  const [input, setInput] = useState("");
  const [font, setFont] = useState(20);
  const [colors, setColors] = useState("orange");
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const handleData = () => {
    setData([...data, value]);
  };
  return (
    <>
      <div>
        <h1>this is image hider</h1>

        {play && (
          <img src="https://images.unsplash.com/photo-1718808958754-e0f24c2cbabc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" />
        )}

        <button
          style={{ backgroundColor: "teal", padding: "10px", margin: "10px" }}
          onClick={() => setPlay(!play)}
        >
          click me
        </button>

        <input
          placeholder="write text..."
          style={{ margin: "10px", color: "teal" }}
          onChange={(e) => setInput(e.target.value)}
        />

        <div>{input}</div>

        <h2
          style={{ margin: "10px", backgroundColor: "teall", fontSize: font }}
        >
          range volume
        </h2>
        <input
          type="range"
          style={{ margin: "10px", color: "teal", fontSize: font }}
          onChange={(e) => setFont(Number(e.target.value))}
        />
      </div>

      <div>{font}</div>

      <div> Color finder</div>

      <input
        placeholder="text your color..."
        value={colors}
        style={{ margin: "10px", color: "teal", color: colors, border: "2px" }}
        onChange={(e) => setColors(e.target.value)}
      />

      <div
        style={{
          margin: "20px",
          backgroundColor: colors,
          width: "200px",
          height: "100px",
        }}
      ></div>

      <h2>add task</h2>
      <input
        placeholder="text your color..."
        value={value}
        style={{ margin: "10px", color: "teal", color: colors, border: "2px" }}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        style={{
          margin: "10px",
          backgroundColor: "orange",
          padding: "10px",
        }}
        onClick={handleData}
      >
        click to add
      </button>
      <ul
        style={{
          margin: "10px",
          backgroundColor: "teal",
          color: "orange",
          padding: "10px",
        }}
      >
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
