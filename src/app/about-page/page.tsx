import React from "react";
import AboutUsHero from "../components/AboutUs-Hero/page";
import AboutCollectionSection from "../components/About-Collection-Section/page";
import FeaturesSection from "../components/Features-Section/page";
import GetInTouch from "../components/GetInTouch-About/page";
import EmailSignup from "../components/Email-signup/page";

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
