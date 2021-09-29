// add functionality to the code to increase num by 1 after every button click

const FixIt2 = () => {
  const [num, setNum] = useState(0);

  return (
    
      <h1>{num}</h1>
      <button onClick={setNum}>add</button>
    
  );
};
export default FixIt2;
