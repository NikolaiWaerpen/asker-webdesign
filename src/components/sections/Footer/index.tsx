import {
  DROPDOWN_OPTIONS,
  MAIL_TO,
  SCROLL_DURATION,
} from "../../../data/consts";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="bg-gradient-to-tl from-blue-500 to-blue-800 mt-80 md:mt-0">
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

      <div className="text-white space-y-12 px-8 pb-12">
        <img src="images/logo.png" className="mt-3 w-40 md:w-56 lg:w-72" />
        <div className="text-white text-md space-y-4">
          <a href={MAIL_TO}>hello@waerpendevelopment.com</a>
          <h5>(+47) 452 93 539</h5>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Navigasjon</h3>
          <br />
          <div className="bg-blue-400 w-40 h-0.5" />
          <br />
          {DROPDOWN_OPTIONS.map((dropdownOption) => {
            return (
              <Link
                to={dropdownOption.linkLocation}
                smooth={true}
                duration={SCROLL_DURATION}
                key={dropdownOption.title}
              >
                <h5>{dropdownOption.title}</h5>
              </Link>
            );
          })}
        </div>

        <div>
          <h3 className="text-2xl font-bold">Tjenester</h3>
          <br />
          <div className="bg-blue-400 w-40 h-0.5" />
          <br />
          <h5>Web Design</h5>
          <h5>Nettsidevedlikehold</h5>
          <h5>SEO tjenester</h5>
          <h5>Innholdsoppretting</h5>
          <h5>Logo design</h5>
        </div>
      </div>
      <div className="text-white py-8 bg-gradient-to-tl from-blue-500 to-blue-800">
        <div className="flex justify-center">
          <h3 className=" text-gray-200">Copyright © 2021 |&nbsp;</h3>
          <a href="/" className="font-medium">
            Waerpen Development
          </a>
        </div>
        <h3 className="flex justify-center text-gray-200">
          All Rights Reserved
        </h3>
      </div>
    </div>
  );
}
