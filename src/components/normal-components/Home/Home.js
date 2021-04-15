import React from "react";
import Contact from "../../shared-components/Contact/Contact";
import Footer from "../../shared-components/Footer/Footer";
import Navigation from "../../shared-components/Navigation/Navigation";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeFeatures from "./HomeFeatures/HomeFeatures";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeProducts from "./HomeProducts/HomeProducts";
import HomeReview from "./HomeReview/HomeReview";

export default function Home() {
  return (
    <>
      <Navigation />
      <HomeHeader />
      <HomeFeatures />
      <HomeProducts />
      <HomeReview />
      <HomeBanner />
      <Contact />
      <Footer />
    </>
  );
}
