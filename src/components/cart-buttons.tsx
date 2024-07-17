import { useCartContext } from "./cart-context";

const CartButtons = () => {
  const { dispatch } = useCartContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default CartButtons;
