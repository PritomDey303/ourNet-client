import React from "react";
import Banner from "../../shared-components/Banner/Banner";
import Footer from "../../shared-components/Footer/Footer";
import Navigation from "../../shared-components/Navigation/Navigation";
import ReviewMain from "./ReviewMain/ReviewMain";
export default function Review() {
  return (
    <div>
      <Navigation />
      <Banner msg="Welcome to Review Section"></Banner>
      <ReviewMain />
      <Footer />
    </div>
  );
}
