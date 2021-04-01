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

      <WhatWeCanOfferSection />

      <div id="portfolio">
        <PortfolioSection />
      </div>

      <div id="whoWeAre">
        <WhoWeAreSection />
      </div>

      <PricingSection />

      <ContactUs />

      <Footer />
    </div>
  );
}
