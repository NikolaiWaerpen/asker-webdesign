import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { portfolioBoxData } from "../../../data/portfolioBoxData";
import NewSection from "../../NewSection";

export default function PortfolioSection() {
  return (
    <div className="mt-28">
      <NewSection blueText="Our" blackText="portfolio" icon={faDesktop}>
        <div className="mx-4 space-y-16 md:mx-36 lg:mx-14 lg:space-y-0 lg:grid lg:grid-cols-2">
          {portfolioBoxData.map(
            ({ image, title, location, description, link }) => (
              <div
                key={title}
                className="bg-white p-6 border-b-4 border-blue-500 space-y-6 shadow-2xl rounded-md lg:mx-8"
              >
                <div className="flex justify-center object-contain">
                  <img src={image} alt="" className="flex justify-center" />
                </div>

                <div>
                  <h4 className="font-bold text-lg">{title}</h4>
                  <h6 className="text-md font-extralight text-gray-400">
                    {location}
                  </h6>
                </div>

                <p className="text-md text-gray-500 font-light">
                  {description}
                </p>

                <div className="flex pb-8">
                  <a
                    href={link}
                    target="_blank"
                    className="flex justify-center w-32 h-10 text-white bg-gradient-to-l from-blue-400 to-blue-500 rounded-sm font-bold uppercase text-xs"
                  >
                    <span className="flex mt-3">Visit {title}</span>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </NewSection>
    </div>
  );
}