import React, { useState, useEffect } from "react";

const Heading = ({ beginNaam }) => {
  const [naam, setNaam] = useState(0);

  useEffect(() => {
    setNaam(beginNaam);
  }, []);

  return (
    <div>
      <h1>{naam}</h1>
      <button onClick={() => setNaam(naam + 1)}>Klik hier</button>
    </div>
  );
};

export default Heading;
