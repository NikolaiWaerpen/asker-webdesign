import { Link } from "react-scroll";
import { SCROLL_DURATION } from "../../../data/consts";

import WhatWeDoSection from "../WhatWeDoSection";

export default function Header({ screenLarge }) {
  return (
    <div>
      <div className="headerAndFooterGradient">
        <div className="mx-3 pt-40 relative text-white  md:w-2/3 lg:mx-12 lg:w-2/5 xl:mx-32 xl:w-2/5 flex flex-col md:flex-row ">
          <div className="space-y-9 relative z-30">
            <h1 className="text-25xl font-extrabold md:text-5xl">
              Webutvikling og design for småbedrifter
            </h1>
            <div className="xl:w-2/3 space-y-9">
              <p className="font-light">
                Ingen sidebyggere eller WordPress - Vi tilbyr 100% håndkodede
                nettsteder som gir overlegne resultater fra kr 1500 pr. måned
              </p>
              <div>
                <Link to="contactUs" smooth={true} duration={SCROLL_DURATION}>
                  <button className="px-8 py-3.5 text-black bg-white rounded-sm font-bold uppercase text-xs hover-effect">
                    Ta kontakt!
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {!screenLarge && (
            <img
              src="images/showcase/header.png"
              alt=""
              className="absolute z-20 top-90/10 md:top-80 md:left-45/10"
            />
          )}
        </div>
        {screenLarge && (
          <img
            src="images/showcase/header.png"
            alt=""
            className="absolute z-20 w-4/6 right-8 top-32 xl:top-36 2xl:top-14 xl:w-7/12 xl:right-32"
          />
        )}
        <div className="relative z-0 lg:absolute lg:top-80 headerAndFooterGradient w-full">
          {!screenLarge && (
            <div className="w-full h-1 absolute top-995/100 z-10" />
          )}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1505 800">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  transform="translate(1505), scale(-1, 1)"
                  style={{ fill: " #fff" }}
                  d="M1307.89,352c97.61-58.49,160-115.9,197.11-156.93V800H0V0C279.45,146.85,562.08,290.71,773.09,379.11S1131.81,457.52,1307.89,352Z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* ------------------------------------- WHAT WE DO ------------------------------------- */}
      <div className="mt-32 sm:mt-44 md:mt-0 lg:mt-23rem xl:mt-28rem 2xl:mt-32rem z-50 relative bg-white">
        <WhatWeDoSection />
      </div>
    </div>
  );
}
