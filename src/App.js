import React, { useState } from "react";
import Navibar from "./components/Header/Navibar";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StoreItems from "./components/Main/Store/StoreItems";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showHandler = ()=>{
    setShowCart(true);
  }
  const hideHandler = ()=>{
    setShowCart(false);
  }
  return (
    <React.Fragment>
        <Navibar showHandler={showHandler} />
        <Header />
        {showCart && <Cart show={showCart} hideHandler={hideHandler} />}
        <main>
          <StoreItems />
        </main>
        <Footer />
    </React.Fragment>
  );
}

export default App;
