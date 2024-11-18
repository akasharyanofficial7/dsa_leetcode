import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const contactUs = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div>
      <form className=" m-5" onSubmit={contactUs}>
        <div className="mb-3 ">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          2
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <h2>{email}</h2>
    </div>
  );
};

export default Form;
