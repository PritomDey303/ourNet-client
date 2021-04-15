import React from "react";
import Banner from "../../shared-components/Banner/Banner";
import Contact from "../../shared-components/Contact/Contact";
import Footer from "../../shared-components/Footer/Footer";
import Navigation from "../../shared-components/Navigation/Navigation";

export default function ContactSection() {
  return (
    <div>
      <Navigation />
      <Banner msg="Welcome To Contact Section" />
      <Contact />
      <Footer />
    </div>
  );
}
