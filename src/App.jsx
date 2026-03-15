import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

function App() {
  let [cartItem, setCartItem] = useState(0);
  useEffect(() => {
    localStorage.setItem("cartItem", cartItem);
  }, [cartItem]);
  return (
    <>
      <Header cartItem={cartItem} />

      <Footer />
    </>
  );
}

export default App;
