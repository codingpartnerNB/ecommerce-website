import React, { useState } from "react";
import Navibar from "./components/Header/Navibar";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StoreItems from "./components/Main/Store/StoreItems";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./store/ContextProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showHandler = ()=>{
    setShowCart(true);
  }
  const hideHandler = ()=>{
    setShowCart(false);
  }
  return (
    <ContextProvider>
        <Navibar showHandler={showHandler} />
        <Header />
        {showCart && <Cart show={showCart} hideHandler={hideHandler} />}
        <main>
          <StoreItems showHandler={showHandler} />
        </main>
        <Footer />
    </ContextProvider>
  );
}

export default App;
