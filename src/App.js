import ControlledModal from "./components/controlled-modal";
import { useState } from "react";

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h3>text in modal</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Display Modal"}
      </button>
    </>
  );
}

export default App;
