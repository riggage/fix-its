// have to display the list array, as well as add an item to that list
// input must be reset after added

import { useState } from "react";

const FixIt2 = () => {
  const [list, setList] = useState(["sophie" "jason"]);
  const [input, setInput] = useState("");

  return (
    <div>
      {list.map(person) => {
        return <h1>{person}</h1>;
      }}
      <Adder input={input} setInput={setInput}  />
    </div>
  );
};

const Adder = ({ input, setInput }) => {
  const addHandler = () => {
    const newList = list;
    newList.push(input);

  };
  return (
    <div>
      <input value={input} onChange={} />
      <button>add</button>
    </div>
  );
};
export default FixIt2;
