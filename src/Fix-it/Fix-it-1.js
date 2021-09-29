// display the input, if there is no input make sure the "display something" message is rendered
import { useState } from "react";

const FixIt1 = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input value={input} onClick={() => setInput()} />
    </div>
  );
};

const Display =  {
   <div>{input ? <h1></h1> : <h1>display something</h1>}</div>;
};
export default FixIt1;
