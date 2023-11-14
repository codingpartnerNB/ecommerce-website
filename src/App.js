import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StoreItems from "./components/Main/Store/StoreItems";
import ContextProvider from "./store/ContextProvider";
import About from "./components/Main/About/About";
import RootLayout from "./RootLayout";
import Home from "./components/Main/Home/Home";
import ContactUs from "./components/Main/ContactUS/ContactUs";


function App() {
  const [showCart, setShowCart] = useState(false);
  const showHandler = ()=>{
    setShowCart(true);
  }
  const hideHandler = ()=>{
    setShowCart(false);
  }

  const formHandler = async (userData)=>{
    const response = await fetch("https://e-commerce-fe0c1-default-rtdb.firebaseio.com/contactUs.json",{
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout show={showCart} showHandler={showHandler} hideHandler={hideHandler} />,
      children: [
        {index: true, element: <Home />},
        {path: 'store', element: <StoreItems showHandler={showHandler} />},
        {path: 'aboutus', element: <About />},
        {path: 'contactus', element: <ContactUs contactForm={formHandler} />}
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
