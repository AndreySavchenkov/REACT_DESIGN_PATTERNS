import { useDispatchContext } from "./cart-context";

const CartButtons = () => {
  const dispatch = useDispatchContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default CartButtons;
