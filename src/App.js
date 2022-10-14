import React from "react";
import { Route,Routes,Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="/service" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Navigate replace to="/" />}/>
        </Route>
        
      </Routes>
      <Footer/>
   </>
  );
}

export default App;