import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const realInputRef = useRef();

  const inputRef = useCallback((input) => {
    realInputRef.current = input;
    if (input === null) return;
    input.focus();
  }, []);

  return (
    <>
      <button onClick={() => setShowInput((s) => !s)}>Show</button>
      {showInput && <input type="text" ref={inputRef} />}
    </>
  );
}

export default App;
