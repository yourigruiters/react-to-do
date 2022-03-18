import React from "react";

const Heading = ({ content }) => {
  const alert2 = (data) => {
    alert(data);
  };

  return (
    <div>
      <h1>{content}</h1>
      <button onClick={() => alert2("doei")}>Klik hier</button>
    </div>
  );
};

export default Heading;
