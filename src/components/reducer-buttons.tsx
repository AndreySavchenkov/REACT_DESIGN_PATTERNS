import { useCartContext } from "../App";

const ReducerButtons = () => {
  const { dispatch } = useCartContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default ReducerButtons;
