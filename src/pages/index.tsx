import { motion } from "framer-motion";
import { useState } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMobileAlt,
  faDesktop,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

// own components
import NewSection from "../components/NewSection";
import InfoSection from "../components/InfoSection";

// data
import { infoSectionData } from "../data/infoSectionData";
import { bulletPointData } from "../data/bulletPointData";
import BulletPoint from "../components/BulletPoint";
import PricingBox from "../components/PricingBox";
import { pricingBoxData } from "../data/pricingBoxData";
import PortfolioBox from "../components/PortfolioBox";
import { portfolioBoxData } from "../data/portfolioBoxData";

// TODO LIST:
// * Standardize colors
// * Standardize fonts
// * Standardize spacing
// * Fix icons in NewSection
// * Implement SVG's
//     - PricingBox bulletpoint
//     - BulletPoint
//     - InfoSection
// * Put in an image of yourself knobhead
// * Make Portfolio box reusable and nice
// * Give mapped child components keys

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <div className="bg-gradient-to-tl from-blue-500 to-blue-800">
        <div className="px-4 pt-2 flex justify-between">
          <img
            // src="http://placehold.jp/150x50.png"
            src="images/logo150.png"
            className="mt-3"
          />
          <button
            className="block text-white text-3xl"
            onClick={() => console.log("cool")}
          >
            {navOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <div className="px-3 pt-20 pb-12 text-white space-y-9">
          <h2 className="text-25xl font-extrabold">
            Small Business Web Development + Design
          </h2>
          <p className="font-light">
            No page builders or WordPress - We offer 100% hand-coded websites
            with superior results starting at kr 1500/mo.
          </p>
          <button className="px-8 py-3.5 text-black bg-white rounded-sm font-bold uppercase text-xs">
            Get in touch!
          </button>
        </div>
        <img
          src="https://d33wubrfki0l68.cloudfront.net/25e94eabb1cdec2613bd265d645dc15324bacfe8/86f45/images/landing-swoosh.svg"
          alt=""
          className=""
        />
      </div>
      {/* New section */}
      <div className="flex flex-col p-3">
        <NewSection blueText="What" blackText="we do" icon={faUserAlt}>
          <p className="flex justify-center text-lg text-gray-500 text-center font-light">
            We specialize in small business web design and development for
            clients anywhere in Norway. Every line of code is written by hand to
            ensure the best performance, which helps bring in more customers to
            your site and bring more revenue to your business.
          </p>
          <a
            href=""
            className="flex justify-center uppercase text-lg text-blue-400 font-light"
          >
            LEARN MORE
          </a>
        </NewSection>
      </div>

      {infoSectionData.map(({ header, content }) => {
        return <InfoSection headerText={header} infoText={content} />;
      })}

      <div className="space-y-3 p-8 text-lg">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/1a6a7635d723bd43ad01eb8e14ca555ade9200d9/e643b/images/savings.svg"
          alt=""
        />
        <div className="font-bold text-2xl">
          <div className="flex">
            <h4 className="text-blue-400">0,-&nbsp;</h4>
            <h4>Down,&nbsp;</h4>
            <h4 className="text-blue-400">1500,-&nbsp;</h4>
            <h4 className="">Per Month,</h4>
          </div>
          <h4>No Minimum Contract</h4>
        </div>
        <p className="text-gray-500 flecx justify-center">
          $0 down for a standard 5 page small business website. If you need more
          than that then we have to do custom pricing based on the scope of
          work, number of additional pages, and time involved.
          <br />
          <br />
          You own your domain, content, listing, and profiles. Cancel anytime
          with no fees or hassle.
        </p>

        {bulletPointData.map(({ header, content }) => (
          <BulletPoint header={header} content={content} />
        ))}
      </div>
      <NewSection blueText="Our" blackText="portfolio" icon={faDesktop}>
        <div className="space-y-16">
          {portfolioBoxData.map(
            ({ image, title, location, description, link }) => (
              <PortfolioBox
                image={image}
                title={title}
                location={location}
                description={description}
                link={link}
              />
            )
          )}
        </div>
      </NewSection>
      <div className="flex flex-col p-16">
        <NewSection blueText="Who" blackText="we are" icon={faUserAlt}>
          <p className="flex justify-center text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            magni repellat ad ipsum blanditiis obcaecati atque nam incidunt et
            distinctio porro ratione mollitia non doloribus maxime, odio dolores
            esse aliquid?
          </p>
          <a
            href=""
            className="flex justify-center uppercase text-xl text-blue-400 font-light"
          >
            LEARN MORE
          </a>
        </NewSection>

        <img src="http://placehold.jp/290x299.png" alt="" className="mb-12" />
        <div className="flex flex-col justify-center">
          <h3 className="flex justify-center text-xl">Nikolai Wærpen</h3>
          <h4 className="flex justify-center text-gray-500 text-lg">
            Owner / Developer
          </h4>
        </div>
      </div>
      {pricingBoxData.map(
        ({ header, subHeader, price, bulletPoints, extraContent }) => (
          <PricingBox
            header={header}
            subHeader={subHeader}
            price={price}
            bulletPoints={bulletPoints}
            extraContent={extraContent}
          />
        )
      )}

      <div className="h-16 bg-white"></div>

      <div className="bg-gradient-to-tl from-blue-500 to-blue-800">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/c272e13f11fec5e8a82b6342bc194b3eb74b5b72/7cf10/images/footer-swoosh.svg"
          alt=""
          className="mb-8 mt-0.5"
        />

        <div className="text-white space-y-12 px-8 pb-12">
          <img
            // src="http://placehold.jp/150x50.png"
            src="images/logo200.png"
            className="mt-3"
          />
          <div className="text-white text-md space-y-4">
            <h5>contact@waerpendevelopment.com</h5>
            <h5>(+47) 452 93 539</h5>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Navigation</h3>
            <br />
            <div className="bg-blue-400 w-40 h-0.5" />
            <br />
            <h5>Home</h5>
            <h5>About</h5>
            <h5>Services</h5>
            <h5>Portfolio</h5>
            <h5>Contact</h5>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Services</h3>
            <br />
            <div className="bg-blue-400 w-40 h-0.5" />
            <br />
            <h5>Web Design</h5>
            <h5>Website Maintenance</h5>
            <h5>SEO Services</h5>
            <h5>Content Creation</h5>
            <h5>Logo design</h5>
          </div>
        </div>
        <div className="text-white py-8 bg-gradient-to-tl from-blue-500 to-blue-800">
          <div className="flex justify-center">
            <h3 className=" text-gray-200">Copyright © 2021 |&nbsp;</h3>
            <h3 className="font-medium">Waerpen Development</h3>
          </div>
          <h3 className="flex justify-center text-gray-200">
            All Rights Reserved
          </h3>
        </div>
      </div>
    </div>
  );
}
