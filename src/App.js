import { useState } from "react";
import { ControlledFlow } from "./components/controlled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Enter Your Name</h1>
      <button onClick={() => goNext({ name: "MyName" })}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => goNext({ age: 34 })}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Congratulations! You quality for the gift!</h1>
      <button onClick={() => goNext({})}>Next</button>
    </>
  );
};
const StepFourth = ({ goNext }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={() => goNext({ country: "Poland" })}>Next</button>
    </>
  );
};

function App() {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      <ControlledFlow currentIndex={currentStepIndex} onNext={goNext}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFourth />
      </ControlledFlow>
    </>
  );
}

export default App;
