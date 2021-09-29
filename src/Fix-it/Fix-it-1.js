// click the button to display the Welcome component

import { useState } from "react";

const FixIt1 = () => {
  const [bool, setBool] = useState(false);

  return (
    <div>
      <h1>welcome user</h1>
      <p>are you present?</p>
      <button onClick={setBool(true)}>click here to check-in</button>
      {bool && <Welcome />}
    </div>
  );
};

const Welcome = () => {
  return <p>welcome, you are checked in</p>;
};
export default FixIt1;
