import InfoSection from "../components/sections/InfoSection";
import Header from "../components/sections/Header";
import WhatWeDoSection from "../components/sections/WhatWeDoSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import WhoWeAreSection from "../components/sections/WhoWeAreSection";
import WhatWeCanOfferSection from "../components/sections/WhatWeCanOfferSection";
import PricingSection from "../components/sections/PricingSection";
import Footer from "../components/sections/Footer";
import ContactUs from "../components/sections/ContactUs";

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
  return (
    <div>
      <div id="header">
        <Header screenLarge={screenLarge} />
      </div>

      <div id="whatWeDo">
        <WhatWeDoSection />
      </div>

      <InfoSection />

      <div className="mt-28 lg:mt-72">
        <WhatWeCanOfferSection />
      </div>

      <div id="portfolio" className="pt-4 mt-28 lg:mt-72">
        <PortfolioSection />
      </div>

      <div id="whoWeAre" className="pt-4 mt-28 lg:mt-72">
        <WhoWeAreSection />
      </div>

      <div className="mt-28 lg:mt-72">
        <PricingSection />
      </div>

      <div id="contactUs" className="pt-4 mt-28 lg:mt-72">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
}
