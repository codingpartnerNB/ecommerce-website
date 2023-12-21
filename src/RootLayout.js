import { Outlet } from "react-router-dom";
import Navibar from "./components/Header/Navibar";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Cart from "./components/Cart/Cart";
import { Suspense, lazy } from "react";

const RootLayout = (props)=>{
    const Cart = lazy(() => import('./components/Cart/Cart'));
    return(
        <>
            <Navibar showHandler={props.showHandler} />
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                {props.show && <Cart show={props.show} hideHandler={props.hideHandler} />}
            </Suspense>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default RootLayout;