import { pricingBoxData } from "../../../data/pricingBoxData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { MAIL_TO } from "../../../data/consts";

const BulletPoint = ({ bulletPoint }) => {
  return (
    // <div className="flex ">
    // </div>
    <div className="flex space-x-1">
      <div className="flex flex-grow-1 flex-row-reverse">
        <FontAwesomeIcon icon={faCheckCircle} className="text-blue-400 mt-1" />
      </div>
      <div className="flex flex-grow-3 w-28">
        <h4 className="text-gray-500 text-md font-light ml-1">{bulletPoint}</h4>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <div className="mt-28 mx-4 mb-12 space-y-12 lg:space-y-0 md:mx-40 lg:mx-0 lg:flex lg:justify-center lg:space-x-12">
      {pricingBoxData.map(({ header, subHeader, price, bulletPoints }) => (
        <div
          key={header}
          className="bg-white border-2 border-blue-200 rounded-md overflow-hidden shadow-md lg:w-72 xl:w-96"
        >
          <h5
            className={`${
              header === pricingBoxData[1].header
                ? "bg-green-300"
                : "bg-blue-100"
            }
            font-semibold text-md flex justify-center border-b-2 border-blue-200 py-3`}
          >
            {header}
          </h5>
          <div className="mt-3">
            <div>
              <span className="text-gray-500 text-md font-light flex justify-center">
                {subHeader}
              </span>
              <div className="flex text-blue-400 justify-center">
                <h5 className="text-2xl mt-1 mr-1">kr</h5>
                <h2 className="text-6xl">{price}</h2>
                {price === pricingBoxData[2].price ? null : (
                  <h5 className=" uppercase text-xl mt-7">/ mnd</h5>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-2 mt-3">
              {bulletPoints.map((bulletPoint) => {
                return (
                  <BulletPoint key={bulletPoint} bulletPoint={bulletPoint} />
                );
              })}
            </div>

            <div className="flex justify-center pb-5 mt-8 mb-4">
              <button className="flex justify-center w-32 h-10 text-white bg-gradient-to-l from-blue-400 to-blue-500 rounded-sm font-bold uppercase text-xs">
                <a href={MAIL_TO} className="mt-3">
                  Kontakt oss
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
