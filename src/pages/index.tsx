import Header from "../components/sections/Header";
import PortfolioSection from "../components/sections/PortfolioSection";
import WhoWeAreSection from "../components/sections/WhoWeAreSection";
import WhatWeCanOfferSection from "../components/sections/WhatWeCanOfferSection";
import PricingSection from "../components/sections/PricingSection";
import Footer from "../components/sections/Footer";
import ContactUs from "../components/sections/ContactUs";

// import ReactGA from "react-ga";
// import { TRACKING_ID } from "../data/consts";
// import { useEffect } from "react";
import CustomHead from "../components/CustomHead";

// TODO LIST:
// * Standardize colors
// * Standardize fonts
// * Standardize spacing
// * Pull each section into their own component
// * Put in an image of yourself knobhead

// Responsive breakpoints:
// iPhone X (default)
// 768px (md)
// 1024px (lg)
// >1600 (xl)

// mt-28 standard

export default function HomePage({ screenLarge }) {
  // useEffect(() => {
  //   ReactGA.initialize(TRACKING_ID, {
  //     gaOptions: {
  //       cookieFlags: "SameSite=None;Secure",
  //     },
  //   });
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <div>
      {/* Meta stuff */}
      <CustomHead />

      <div id="header">
        <Header screenLarge={screenLarge} />
      </div>

      <div className="space-y-36 md:space-y-40 lg:space-y-48 2xl:space-y-72">
        <div />
        <div className="">
          <WhatWeCanOfferSection />
        </div>

        <div id="portfolio" className="pt-4 ">
          <PortfolioSection />
        </div>

        <div id="whoWeAre" className="pt-4 ">
          <WhoWeAreSection />
        </div>

        {/* <div className="">
          <PricingSection />
        </div> */}

        <div id="contactUs" className="pt-4 ">
          <ContactUs screenLarge={screenLarge} />
        </div>
      </div>
      <div className="mt-32">
        <Footer screenLarge={screenLarge} />
      </div>
    </div>
  );
}
