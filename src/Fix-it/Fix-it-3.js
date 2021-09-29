// update this code to switch between light and dark mode

const FixIt3 = () => {

  return (
    <div>
      {bool ? (
        <div style={{ background: "#F0F8FF" }}>
          <h1>light mode</h1>
          <button>switch to dark mode</button>
        </div>
      ) : (
        <div style={{ background: "#808080" }}>
          <h1>dark mode</h1>
          <button>switch to light mode</button>
        </div>
      )}
    </div>
  );
};
export default FixIt3;