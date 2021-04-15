import AOS from "aos";
import React from "react";
import "./Banner.css";
AOS.init();
export default function Banner({ msg }) {
  return (
    <div className="banner" data-aos="fade-down" data-aos-duration="1500">
      <div className="banner-overlay"></div>
      <h1 className="text-light banner-text">{msg}</h1>
    </div>
  );
}
