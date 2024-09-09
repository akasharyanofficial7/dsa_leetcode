import React, { useState } from "react";

const ApiTask = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setData(users))
      .catch((error) => {
        console.log(" this is error");
      });
  };

  // fetchData();
  return (
    <div>
      <button onClick={fetchData}>CLICK ME</button>
      <ul>
        {data.map((val) => {
          return <li>{val.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ApiTask;
