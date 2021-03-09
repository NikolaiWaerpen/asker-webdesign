import { motion } from "framer-motion";
import { useState } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// own components
import NewSection from "../components/NewSection";
import InfoSection from "../components/InfoSection";

// data
import { infoSectionData } from "../pageData/infoSectionData";
import { bulletPointData } from "../pageData/bulletPointData";
import BulletPoint from "../components/BulletPoint";
import PricingBox from "../components/PricingBox";
import { pricingBoxData } from "../pageData/pricingBoxData";

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <div className="bg-gradient-to-tl from-blue-500 to-blue-800">
        <div className="px-4 pt-2 flex justify-between">
          <img
            // src="http://placehold.jp/150x50.png"
            src="logo150.png"
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
        <div className="p-12 text-white space-y-9">
          <h2 className="text-25xl font-extrabold">
            Small Business Web Design + Development
          </h2>
          <p className="font-light">
            No page builders or WordPress - We offer 100% hand-coded websites
            with superior results starting at kr 1500/mo.
          </p>
          <button className="px-8 py-3 text-black bg-white rounded-sm font-bold uppercase text-xs">
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
      <div className="flex flex-col p-16">
        <NewSection
          blueText="What"
          blackText="we do"
          img="https://d33wubrfki0l68.cloudfront.net/29048d9efe89252399122cd2487f253dcbe9bcc4/cf8a5/images/code.svg"
        >
          <p className="flex justify-center text-lg text-gray-500">
            We specialize in small business web design and development for
            clients anywhere in the US. Every line of code is written by hand to
            ensure the best performance, which helps bring in more customers to
            your site and bring more revenue to your business.
          </p>
          <a
            href=""
            className="flex justify-center uppercase text-xl text-blue-400 font-light"
          >
            LEARN MORE
          </a>
        </NewSection>
      </div>

      {infoSectionData.map((infoSection) => {
        return (
          <InfoSection
            headerText={infoSection.header}
            infoText={infoSection.content}
          />
        );
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

        {bulletPointData.map((bulletPoint) => {
          return (
            <BulletPoint
              header={bulletPoint.header}
              content={bulletPoint.content}
            />
          );
        })}
      </div>
      <NewSection
        blueText="Our"
        blackText="portfolio"
        img="https://d33wubrfki0l68.cloudfront.net/e9d9895c8751f62725f1b49e32d0f3f62682d195/c6364/images/portfolio.svg"
      >
        {/* Three of these cards */}
        <div className="bg-white p-4 m-8 border-b-2 border-blue-500 space-y-5">
          <img
            src="http://placehold.jp/298x163.png"
            alt=""
            className="flex justify-center"
          />
          <div>
            <h4 className="font-bold text-lg">Burger</h4>
            <h6 className="text-md text-gray-400">Billingstad, Asker</h6>
          </div>
          <p className="text-md text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            corrupti ipsum odio praesentium a molestiae deserunt.
          </p>
          <a
            href="https://burger-mauve.vercel.app"
            target="_blank"
            className="px-8 py-3 text-white bg-blue-400 rounded-sm font-bold uppercase text-xs"
          >
            Visit burger
          </a>
        </div>
      </NewSection>
      <div className="flex flex-col p-16">
        <NewSection
          blueText="Who"
          blackText="we are"
          img="https://d33wubrfki0l68.cloudfront.net/009bfb53714af3ae071037fef68318d40b30fb41/4ae45/images/profile.svg"
        >
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
      {pricingBoxData.map((pricingBox) => {
        return (
          <PricingBox
            header={pricingBox.header}
            subHeader={pricingBox.subHeader}
            price={pricingBox.price}
            bulletPoints={pricingBox.bulletPoints}
            extraContent={pricingBox.extraContent}
          />
        );
      })}

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
            src="logo200.png"
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
