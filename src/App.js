import { Child } from "./components/child";
import { ErrorBoundary } from "./components/error-boundary";

function App() {
  return (
    <>
      <h1>Parent Component</h1>
      <ErrorBoundary fallback={<h1>Error at Child Level</h1>}>
        <Child />
      </ErrorBoundary>
    </>
  );
}

export default App;
