import React from "react";
import ClimbingBoxLoader from "react-spinners/HashLoader";
const Loading = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    height: "100vh",
  };
  return (
    <>
      <ClimbingBoxLoader color="#cd1148" cssOverride={override} />
    </>
  );
};

export default Loading;
