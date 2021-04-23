import {
  DROPDOWN_OPTIONS,
  MAIL_TO,
  SCROLL_DURATION,
} from "../../../data/consts";
import { Link } from "react-scroll";

export default function Footer({ screenLarge }) {
  return (
    <div className="headerAndFooterGradient">
      <div className="relative">
        <div className="bg-white w-full h-1 absolute bottom-99/100" />
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1505 438.9"
        >
          <path
            style={{ fill: "#FFFFFF" }}
            d="M0,195.1c37.1,41,99.5,98.4,197.1,156.9c176.1,105.5,323.8,115.5,534.8,27.1S1225.6,146.9,1505,0H0V195.1z"
          />
        </svg>
      </div>
      <div className="text-white space-y-12 px-8 pb-16 pt-12 lg:space-y-10 lg:pt-20 xl:pt-28 md:pb-28 lg:flex lg:justify-between lg:mx-12 xl:mx-48 2xl:mx-56">
        <div className="space-y-12">
          <Link
            to="header"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            <img
              src="images/logos/askerwebdesignlogosmall.png"
              alt="Footer M*A*S*H IT logo"
              className="mt-3 w-40 md:w-64"
            />
          </Link>
          <div className="text-white text-md space-y-4">
            <a href={MAIL_TO} className="hover-underline-effect">
              hei@mashit.no
            </a>
            <h5>
              {screenLarge ? (
                "(+47) 452 93 539"
              ) : (
                <a href="tel:+4745293539">(+47) 452 93 539</a>
              )}
            </h5>
          </div>
        </div>

        <div className="space-y-8 lg:space-y-0 lg:flex lg:space-x-12">
          <div>
            <div className="w-40 border-b border-themecolor5">
              <h3 className="text-2xl font-bold">Navigasjon</h3>
              <br />
            </div>
            <br />
            {DROPDOWN_OPTIONS.map((dropdownOption) => {
              return (
                <Link
                  to={dropdownOption.linkLocation}
                  smooth={true}
                  duration={SCROLL_DURATION}
                  key={dropdownOption.title}
                >
                  <button className="block hover-underline-effect">
                    {dropdownOption.title}
                  </button>
                </Link>
              );
            })}
          </div>

          <div>
            <div className="w-40 border-b border-themecolor5">
              <h3 className="text-2xl font-bold">Tjenester</h3>
              <br />
            </div>
            <br />
            <h5>Web Utvikling</h5>
            <h5>Web Design</h5>
            <h5>Nettsidevedlikehold</h5>
            <h5>SEO tjenester</h5>
            <h5>Innholdsoppretting</h5>
            <h5>Logo design</h5>
          </div>
        </div>
      </div>

      <div className="text-white py-8 copyrightGradient">
        <div className="flex justify-center">
          <h3 className=" text-gray-200">Copyright © 2021 |&nbsp;</h3>
          <a href="/" className="font-medium">
            M*A*S*H IT
          </a>
        </div>
        <h3 className="flex justify-center text-gray-200">
          All Rights Reserved
        </h3>
      </div>
    </div>
  );
}
