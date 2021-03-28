import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const SCROLL_DURATION = 1000;

const SmallTopOfNav = ({ closeNav, navOpen }) => {
  return (
    <div className="px-4 pt-2 flex justify-between">
      <img src="images/logo150.png" className="mt-3" />
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
      <img src="images/logo150.png" className="mt-3 w-60" />
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

export default function Navigation({ screenLarge }) {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen((current) => !current);
  };

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
