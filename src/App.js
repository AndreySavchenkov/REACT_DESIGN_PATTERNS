import { useState } from "react";
import { Counter } from "./components/new-counter";

function App() {
  const [changeShirts, setChangeShirts] = useState(false);

  return (
    <div>
      {changeShirts ? <span>Shirts count: </span> : <span>Shoes count: </span>}
      <input type="number" key={changeShirts ? "shoes" : "shirts"} />
      <br />
      <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
    </div>
  );
}

export default App;
