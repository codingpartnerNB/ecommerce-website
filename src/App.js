import React from "react";
import Navibar from "./components/Header/Navibar";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StoreItems from "./components/Main/Store/StoreItems";

function App() {
  return (
    <React.Fragment>
        <Navibar/>
        <Header />
        <main>
          <StoreItems />
        </main>
        <Footer />
    </React.Fragment>
  );
}

export default App;
