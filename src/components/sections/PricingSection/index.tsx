import { pricingData } from "./pricingData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { SCROLL_DURATION } from "../../../data/consts";

const BulletPoint = ({ bulletPoint }) => {
  return (
    <div className="flex space-x-1">
      <div className="flex flex-grow-1 flex-row-reverse">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-themecolor5 mt-1"
        />
      </div>
      <div className="flex flex-grow-3 w-28">
        <h4 className="text-gray-600 text-md font-light ml-1">{bulletPoint}</h4>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <div className="mx-4 mb-12 space-y-12 lg:space-y-0 sm:mx-48 md:mx-60 lg:mx-20 xl:mx-48 2xl:mx-80 lg:flex lg:justify-center lg:space-x-12">
      {pricingData.map(
        ({ header, subHeader, price, bulletPoints, extraComment }) => (
          <div
            key={header}
            className="bg-white border border-themecolor6 rounded-md overflow-hidden shadow-lg lg:w-80 xl:w-96"
          >
            <div className="lg:h-96">
              <div className="lg:flex lg:flex-col">
                <h5
                  className={`${
                    header === pricingData[1].header
                      ? "bg-themecolor5"
                      : "bg-themecolor6"
                  }
            font-semibold text-md flex justify-center border-b border-themecolor6 py-3`}
                >
                  {header}
                </h5>
                <div className="mt-3">
                  <div>
                    <span className="text-gray-500 text-md font-light flex justify-center">
                      {subHeader}
                    </span>
                    <div className="flex text-themecolor5 justify-center">
                      <h5 className="text-2xl mt-1 mr-1">kr</h5>
                      <h2 className="text-6xl">{price}</h2>
                      {price === pricingData[2].price ? null : (
                        <h5 className=" uppercase text-xl mt-7">/ mnd</h5>
                      )}
                    </div>
                    {extraComment && (
                      <div className="flex justify-center text-extralight text-sm text-gray-500">
                        {extraComment}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-2 mt-3">
                  {bulletPoints.map((bulletPoint) => {
                    return (
                      <BulletPoint
                        key={bulletPoint}
                        bulletPoint={bulletPoint}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex justify-center pb-5 mt-8 mb-4">
              <Link to="contactUs" smooth={true} duration={SCROLL_DURATION}>
                <button className="w-32 h-10 text-white buttonGradient rounded-sm font-bold uppercase text-xs hover-effect">
                  Kontakt oss
                </button>
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
}
