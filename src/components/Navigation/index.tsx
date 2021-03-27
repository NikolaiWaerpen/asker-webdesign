import {
  faBars,
  faFolderOpen,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const SCROLL_DURATION = 1000;

const SmallTopOfNav = ({ closeNav, navOpen }) => {
  return (
    <div className="px-4 pt-2 flex justify-between">
      <img
        // src="http://placehold.jp/150x50.png"
        src="images/logo150.png"
        className="mt-3"
      />
      <div className="flex text-white text-3xl w-20 justify-between">
        <Link
          to="portfolio"
          smooth={true}
          duration={SCROLL_DURATION}
          className="mt-2"
        >
          <a>
            <FontAwesomeIcon icon={faFolderOpen} />
          </a>
        </Link>
        <button onClick={() => closeNav()}>
          {navOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
    </div>
  );
};

const dropDownOptions = [
  {
    title: "What we do",
    linkLocation: "whatWeDo",
  },
  // {
  //   title: "What we can offer",
  //   linkLocation: "",
  // },
  {
    title: "Portfolio",
    linkLocation: "portfolio",
  },
  {
    title: "Who we are",
    linkLocation: "whoWeAre",
  },
  // {
  //   title: "Prices",
  //   linkLocation: "",
  // },
];

const LargeTopOfNav = () => {
  return (
    <div className="px-4 pt-2 flex justify-between">
      <img
        // src="http://placehold.jp/150x50.png"
        src="images/logo150.png"
        className="mt-3 w-60"
      />
      <ul className="flex space-x-10 text-white text-lg mt-6 font-light">
        {dropDownOptions.map((dropDownOption) => {
          return (
            <Link
              to={dropDownOption.linkLocation}
              smooth={true}
              duration={SCROLL_DURATION}
              key={dropDownOption.title}
            >
              <li>
                <a className="font-bold">{dropDownOption.title}</a>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

const DropDownElement = ({ linkLocation, closeNav, title }) => {
  return (
    <div>
      <Link
        to={linkLocation}
        smooth={true}
        duration={SCROLL_DURATION}
        onClick={closeNav}
      >
        <li>
          <a className="font-bold">{title}</a>
        </li>
      </Link>
    </div>
  );
};

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const [screenLarge, setScreenLarge] = useState(false);

  const closeNav = () => {
    setNavOpen((current) => !current);
  };

  const isScreenLarge = () => {
    if (window.innerWidth > 1023) {
      setScreenLarge(true);
    } else setScreenLarge(false);
  };

  useEffect(() => {
    if (window.innerWidth > 1023) setScreenLarge(true);
  }, []);

  if (typeof window !== "undefined")
    window.addEventListener("resize", isScreenLarge);

  return (
    <div className="lg:mx-10 xl:mx-60 relative z-50">
      {screenLarge ? (
        <LargeTopOfNav />
      ) : navOpen ? (
        <div className="">
          <SmallTopOfNav closeNav={closeNav} navOpen={navOpen} />

          <div
            className={`
                flex text-white  justify-end pr-5`}
          >
            <ul>
              {dropDownOptions.map(({ linkLocation, title }) => (
                <DropDownElement
                  linkLocation={linkLocation}
                  closeNav={closeNav}
                  title={title}
                />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <SmallTopOfNav closeNav={closeNav} navOpen={navOpen} />
      )}
    </div>
  );
}
