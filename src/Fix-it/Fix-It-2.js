const FixIt2 = () => {
  const firstNames = ["geoff", "julie", "sarah"];

  return (
    <div>
      <h1>the chosen ones...</h1>
      {firstNames.map((firstNames) => {
        return <Chosen firstNames={firstNames} />;
      })}
    </div>
  );
};

const Chosen = () => {
  return <p>WITNESS ME {firstNames} !!!</p>;
};
export default FixIt2;
