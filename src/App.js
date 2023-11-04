import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StoreItems from "./components/Main/Store/StoreItems";
import ContextProvider from "./store/ContextProvider";
import About from "./components/Main/About/About";
import RootLayout from "./RootLayout";


function App() {
  const [showCart, setShowCart] = useState(false);
  const showHandler = ()=>{
    setShowCart(true);
  }
  const hideHandler = ()=>{
    setShowCart(false);
  }

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout show={showCart} showHandler={showHandler} hideHandler={hideHandler} />,
      children: [
        {path: '/', element: <StoreItems showHandler={showHandler} />},
        {path: '/aboutus', element: <About />}
      ]
    },
  ]);


  return (
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
