import { Outlet } from "react-router-dom";
import Navibar from "./components/Header/Navibar";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from "./components/Cart/Cart";

const RootLayout = (props)=>{
    return(
        <>
            <Navibar showHandler={props.showHandler} />
            <Header />
            {props.show && <Cart show={props.show} hideHandler={props.hideHandler} />}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default RootLayout;