import React from "react";
import AboutUsHero from "../components/AboutUs-Hero/about-us-hero";
import AboutCollectionSection from "../components/About-Collection-Section/about-collection";
import FeaturesSection from "../components/Features-Section/features-section";
import GetInTouch from "../components/GetInTouch-About/get-in-touch-about";
import EmailSignup from "../components/Email-signup/email-signup";

const AboutPage = () => {
  return (
    <div>
      <AboutUsHero />
      <AboutCollectionSection />
      <GetInTouch />
      <FeaturesSection />
      <EmailSignup/>
    </div>
  );
};

export default AboutPage;
