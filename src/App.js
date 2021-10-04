import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "./components/Features";
import Footer from "./components/Footer";
import HeroMain from "./components/Hero/HeroMain";
import { productsData, productsDataTwo } from "./components/Products/data";
import Products from "./components/Products/Index";
import { GlobalStyle } from "./GlobalStyles";
function App() {
  return (
    <Router>
      
      <GlobalStyle />
      <HeroMain />
      <Products 
        heading='Choose your favorite'
        data={productsData}
      />
      <Feature />
      <Products 
        heading='Deserts for you'
        data={productsDataTwo}
      />
      <Footer />
    </Router>
  );
}

export default App;
