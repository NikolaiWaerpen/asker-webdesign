import {
  faBars,
  faFolderOpen,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

const SCROLL_DURATION = 1000;

const dropDownOptions = [
  {
    title: "What we do",
    linkLocation: "",
  },
  {
    title: "What we can offer",
    linkLocation: "",
  },
  {
    title: "Portfolio",
    linkLocation: "portfolio",
  },
  {
    title: "Who we are",
    linkLocation: "",
  },
  {
    title: "Prices",
    linkLocation: "",
  },
];

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
          <a>{title}</a>
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

  return (
    <div>
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
          <button onClick={() => setNavOpen((current) => !current)}>
            {navOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>
      {/* ${navOpen && "bg-gray-400"} */}
      {navOpen && (
        <div
          className={`
            flex text-white bg-gray-500 w-full justify-end pr-5`}
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
      )}
    </div>
  );
}
