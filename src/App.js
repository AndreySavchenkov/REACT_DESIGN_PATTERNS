import { useRef } from "react";
import { Input } from "./components/custom-input";

function App() {
  const inputRef = useRef();

  return (
    <>
      <Input type="text" ref={inputRef} />
      <button onClick={() => console.log(inputRef.current.value)}>Focus</button>
    </>
  );
}

export default App;
