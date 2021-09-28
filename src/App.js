import FixIt1 from "./Fix-it/Fix-it-1";
import Fixit3 from "./Fix-it/Fix-it-3";

const App = () => {
  return (
    <div>
      <h1>welcome to the Fix-It challenges</h1>
      <h2>get fixing all of these broken codes</h2>
      <h4>Fix all of these components and render them correctly</h4>
      <p>you are currently on the fixit1 branch</p>
      <div>
        <FixIt1 />
        <FixIt2 />
        <Fixit3 />
      </div>
    </div>
  );
}

export default App;
