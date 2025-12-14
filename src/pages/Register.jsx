import React from 'react';

const Register = () => {
  return (
    <div
      id="mainContainer"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row"
      }}
    >
      <div
        id="subContainer"
        style={{
          width: "50%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "5rem"
        }}
      >
        abc
      </div>
      <div
        id="subContainer2"
        style={{
          width: "50%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "5rem"
        }}
      >
        cde
      </div>
    </div>
  );
};

export default Register;
