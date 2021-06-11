import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import NewProduct from "../Product/NewProduct/NewProduct";
import RecentProducts from "../Product/RecentProducts/RecentProducts";
import ProductItems from "../ProductItems/ProductItems";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <div className="">
      <HomeSlider />
      <ProductItems />
      <RecentProducts/>
      <NewProduct/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
