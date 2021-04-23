import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-scroll";
import { DROPDOWN_OPTIONS, SCROLL_DURATION } from "../../data/consts";
import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
    },
  },
};

const SmallTopOfNav = ({ closeNav, navOpen }) => {
  return (
    <div className="px-4 pt-2 flex justify-between">
      <a href="/">
        <img
          src="images/logos/askerwebdesignlogosmall.png"
          alt="Header M*A*S*H IT logo for mobile devices"
          className="mt-3 w-36 md:w-48"
        />
      </a>
      <div className="text-white text-3xl mt-2.5">
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

const DropDownElement = ({ linkLocation, closeNav, title }) => {
  return (
    <motion.div variants={dropdownVariants} initial="hidden" animate="visible">
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
    </motion.div>
  );
};

const LargeTopOfNav = () => {
  return (
    <div className="mr-4 pt-2 flex justify-between">
      <a href="/">
        <img
          src="images/logos/askerwebdesignlogobig.png"
          alt="Header M*A*S*H IT logo for desktop devices"
          className="mt-3 w-60"
        />
      </a>
      <ul className="flex space-x-10 text-white text-lg mt-6 font-light">
        {DROPDOWN_OPTIONS.map((dropDownOption) => {
          return (
            <Link
              to={dropDownOption.linkLocation}
              smooth={true}
              duration={SCROLL_DURATION}
              key={dropDownOption.title}
            >
              <li>
                <button className="font-bold hover-underline-effect">
                  {dropDownOption.title}
                </button>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default function Navigation({ screenLarge }) {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen((current) => !current);
  };

  return (
    <div className="lg:mx-10 xl:mx-32 2xl:mx-56 relative z-50">
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
              {DROPDOWN_OPTIONS.map(({ linkLocation, title }) => (
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
