import { pricingBoxData } from "../../../data/pricingBoxData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const BulletPoint = ({ bulletPoint }) => {
  return (
    <div className="flex space-x-3">
      <FontAwesomeIcon icon={faCheckCircle} className="text-blue-400 mt-1" />
      <h4 className="text-gray-500 text-md font-light ml-1">{bulletPoint}</h4>
    </div>
  );
};

export default function PricingSection() {
  return (
    <div className="mt-28 mx-4 space-y-12 md:space-y-0 md:mx-40 lg:mx-0 lg:flex lg:space-x-12">
      {pricingBoxData.map(({ header, subHeader, price, bulletPoints }) => (
        <div
          key={header}
          className="bg-white border-2 border-blue-200 rounded-md overflow-hidden shadow-md"
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
                  <h5 className="uppercase text-xl mt-7">/mo</h5>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center ml-12 space-y-2 mt-3">
              {bulletPoints.map((bulletPoint) => {
                return (
                  <BulletPoint key={bulletPoint} bulletPoint={bulletPoint} />
                );
              })}
            </div>

            <div className="flex justify-center pb-5 mt-8 mb-4">
              <a
                href="https://waerpendevelopment.com"
                target="_blank"
                className="flex justify-center w-32 h-10 text-white bg-gradient-to-l from-blue-400 to-blue-500 rounded-sm font-bold uppercase text-xs"
              >
                <span className="flex mt-3">Contact us</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
