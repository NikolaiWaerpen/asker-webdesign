import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { portfolioBoxData } from "../../../data/portfolioBoxData";
import NewSection from "../../NewSection";

export default function PortfolioSection() {
  return (
    <NewSection blueText="Our" blackText="portfolio" icon={faDesktop}>
      <div className="space-y-16">
        {portfolioBoxData.map(
          ({ image, title, location, description, link }) => (
            <div
              key={title}
              className="bg-white p-6 m-8 border-b-4 border-blue-500 space-y-6 shadow-2xl rounded-md"
            >
              <div className="flex justify-center">
                <img src={image} alt="" className="flex justify-center" />
              </div>

              <div>
                <h4 className="font-bold text-lg">{title}</h4>
                <h6 className="text-md font-extralight text-gray-400">
                  {location}
                </h6>
              </div>

              <p className="text-md text-gray-500 font-light">{description}</p>

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
  );
}
