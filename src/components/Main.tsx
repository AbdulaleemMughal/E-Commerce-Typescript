import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Carousal from "./Carousal";
import Favourite from "../Pages/Favourite";
import Cart from "../Pages/Cart";
import Electronics from "../Pages/Electronics";
import Jewellary from "../Pages/Jewellary";
import MenClothing from "../Pages/MenClothing";
import WomenClothing from "../Pages/WomenClothing";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Header iconStyle={{ fontSize: "25px" }} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousal styles={{ width: "100%", maxHeight: "500px" }} />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Carousal styles={{ width: "100%", maxHeight: "500px" }} />
              <About />
            </>
          }
        />
        <Route
          path="/category/electronics"
          element={
            <>
              <Carousal styles={{ width: "100%", maxHeight: "500px" }} />
              <Electronics />
            </>
          }
        />
        <Route
          path="/category/jewelery"
          element={
            <>
              <Carousal styles={{ width: "100%", maxHeight: "500px" }} />
              <Jewellary />
            </>
          }
        />
        <Route
          path="/category/men's-clothing"
          element={
            <>
              <Carousal styles={{ width: "100%", maxHeight: "500px" }} />
              <MenClothing />
            </>
          }
        />
        <Route
          path="/category/women's-clothing"
          element={
            <>
              <Carousal styles={{ width: "100%", maxHeight: "500px" }} />
              <WomenClothing />
            </>
          }
        />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer styles={{ backgroundColor: '#f5f5f5', padding: '50px'}} />
    </>
  );
};

export default Main;
