import SplitScreen from "./components/split-screen";

const LeftSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "rosybrown" }}>{title}</h2>;
};

const RightSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComponent title="Left" />
      <RightSideComponent title="Right" />
    </SplitScreen>
  );
}

export default App;
