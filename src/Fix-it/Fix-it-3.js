// two buttons, one to add 1 to num, another to minus 1 from num

const FixIt3 = () => {
  const [num] = useState(0);

  return (
    <div>
      <h1>{num}</h1>
      <Buttons />
    </div>
  );
};

const Buttons = () => {
  return (
    <div>
      <button onClick={setNum}>add one</button>
      <button onClick={setNum}>minus one</button>
    </div>
  );
};
export default FixIt3;
