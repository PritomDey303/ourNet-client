import AOS from "aos";
import React from "react";
import "./Banner.css";
AOS.init();
export default function Banner({ msg }) {
  return (
    <div className="banner" data-aos="fade-down" data-aos-duration="1500">
      <div className="banner-overlay"></div>
      <h2 className="text-light banner-text text-center">{msg}</h2>
    </div>
  );
}
