import { useRef } from "react";
import { Input } from "./components/input";

function App() {
  const inputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <Input ref={inputRef} className="text-input" />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
