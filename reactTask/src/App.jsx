import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(true);

  return (
    <>
      <div>
        {num ? <div>{num + 8}</div> : <div>{num + 2}</div>}
        <button onClick={() => setNum(!num)}> {num ? "click" : "push"}</button>
      </div>
    </>
  );
};

export default App;
