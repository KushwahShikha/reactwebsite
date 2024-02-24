import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes , Route } from "react-router-dom";

const App= () => {
    return(
        <>
        <Navbar/>
        <Routes>
          <Route exact path="/"  element={<Home name = "Home" authed={true}/>}/>
          <Route exact path="/about" element={<About name = "About" authed={true}/>}/>
          <Route exact path="/service" element={<Service name = "Service" authed={true}/>}/>
          <Route exact path="/contact" element={<Contact name = "Contact" authed={true}/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
          
        </>
    );
};
export default App;