import { useStateContext } from "./cart-context";

const Display = () => {
  const {
    state: { count },
  } = useStateContext();

  return <span>{count}</span>;
};

export default Display;
