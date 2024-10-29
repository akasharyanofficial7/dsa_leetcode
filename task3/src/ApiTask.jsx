import React, { useEffect, useState } from "react";

const ApiTask = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setData(users);
        setLoading(false);
      })
      .catch((error) => {
        console.log("This is an error:", error);
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Click me</button>
      <ul>
        {loading && <p>Loading...</p>}
        {data && data.map((val) => <li key={val.id}>{val.name}</li>)}
      </ul>
    </div>
  );
};

export default ApiTask;
