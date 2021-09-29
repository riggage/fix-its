// use a ternary operator to display one of the two messages after its been clicked
import { useState } from "react";

const FixIt2 = () => {
  const [bool, setBool] = useState(true);

  return (
    <div>
      {bool  <h1>bool is set to true</h1> : <h1>bool is set to false</h1>}
      <button onClick={() => setBool(bool)}>change boolean</button>
    </div>
  );
};
export default FixIt2;
