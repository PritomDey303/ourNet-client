import AOS from "aos";
import React from "react";
import "./HomeBanner.css";
AOS.init();
export default function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="banner-overlay"></div>
      <div className="text-light banner-text text-center">
        <h1 data-aos="fade-up" data-aos-duration="1500">
          Explore Over The World With OurNet
        </h1>
      </div>
    </div>
  );
}
