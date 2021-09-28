const FixIt2 = () => {
  const firstNames = ["geoff", "julie", "sarah"];

  return (

      <h1>the chosen ones...</h1>
      {firstNames.map((firstName) => {
        return <Chosen firstName={firstName} />;
      })}
    
  );
};

const Chosen = () => {
  return <p>WITNESS ME firstName !!!</p>;
};
export default FixIt2;
