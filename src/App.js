import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreNavbar from './components/PreNavbar.jsx';
import Navbar from './components/Navbar.js';
import Slider from './components/Slider.jsx'; // Corrected import statement
import data from './data/data.json'; // Importing the default export
import Offers from "./components/Offers.jsx"
import Heading from "./components/Heading.jsx"
import StarProduct from "./components/StarProduct.jsx"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.jsx"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.jsx"


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      <Slider start={data.banner.start} /> {/* Accessing the start property of banner directly */}
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>

     <ProductReviews productReviews={data.productReviews}/>
     
     <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>
   
       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />

    </Router>


  );
}

export default App;
