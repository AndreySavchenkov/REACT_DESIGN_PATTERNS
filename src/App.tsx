import { CartProvider } from "./components/cart-context";
import Display from "./components/display";
import CartButtons from "./components/cart-buttons";

function App() {
  return (
    <CartProvider>
      <Display />
      <CartButtons />
    </CartProvider>
  );
}

export default App;
