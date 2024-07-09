import { useState, useTransition } from "react";
import Reviews from "./components/reviews";

function App() {
  const [section, setSection] = useState("Cover");
  const [isPending, startTransition] = useTransition();

  const sectionHandler = (sec) => {
    startTransition(() => {
      setSection(sec);
    });
  };

  return (
    <>
      <button onClick={() => sectionHandler("Cover")}>Book Cover</button>
      <button onClick={() => sectionHandler("Reviews")}>Book Reviews</button>
      <button onClick={() => sectionHandler("Writer")}>Book's Writer</button>

      {isPending && "Loading..."}

      {section === "Cover" ? (
        <div>cover</div>
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <div>writer</div>
      )}
    </>
  );
}

export default App;
