import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import SlicedCharacters from "../SlicedCharacters/SlicedCharacters";

const Home = () => {

  return (
    <div>
      <Banner />
      <SlicedCharacters/>
      <Footer />
    </div>
  );
};

export default Home;
