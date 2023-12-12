import React, { useContext, useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StoreItems from "./components/Main/Store/StoreItems";
import ContextProvider from "./store/ContextProvider";
import About from "./components/Main/About/About";
import RootLayout from "./RootLayout";
import Home from "./components/Main/Home/Home";
import ContactUs from "./components/Main/ContactUS/ContactUs";
import Product from "./components/Main/Store/Product";
import Login from "./components/Main/Login/Login";
import AuthContext from "./store/auth-context";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


function App() {
  const [showCart, setShowCart] = useState(false);
  const authCtx = useContext(AuthContext);
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

  // const router = createBrowserRouter([
  //   {
  //     path: '/', element: <RootLayout show={showCart} showHandler={showHandler} hideHandler={hideHandler} />,
  //     children: [
  //       {index: true, element: <Home />},
  //       {path: 'store', element: <StoreItems showHandler={showHandler} />},
  //       {path: 'aboutus', element: <About />},
  //       {path: 'contactus', element: <ContactUs contactForm={formHandler} />},
  //       {path: 'store/:productId', element: <Product />},
  //       {path: 'login', element: <Login />}
  //     ]
  //   },
  // ]);


  return (
      <ContextProvider>
          {/* <RouterProvider router={router} /> */}
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<RootLayout show={showCart} showHandler={showHandler} hideHandler={hideHandler} />}>
                <Route index element={<Home />} />
                <Route path='store' element={
                  authCtx.isLoggedIn ? <StoreItems showHandler={showHandler} /> : <Navigate to='/login' />} />
                <Route path='aboutus' element={<About />} />
                <Route path='contactus' element={<ContactUs contactForm={formHandler} />} />
                <Route path='store/:productId' element={<Product />}/>
                <Route path='login' element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </ContextProvider>
  );
}

export default App;
