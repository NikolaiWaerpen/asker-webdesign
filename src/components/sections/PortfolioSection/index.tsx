import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { portfolioData } from "./portfolioData";
import NewSection from "../../NewSection";

export default function PortfolioSection() {
  return (
    <NewSection blueText="Vår" blackText="portefølje" icon={faDesktop}>
      <div className="mx-4 space-y-16 md:mx-36 lg:mx-14 xl:mx-28 lg:space-y-0 lg:grid lg:grid-cols-2">
        {portfolioData.map(
          ({ image, title, visitTitle, location, description, link }) => (
            <div
              key={title}
              className="bg-white p-6 border-b-4 border-themecolor6 space-y-6 shadow-2xl rounded-md lg:mx-8"
            >
              <div className="flex justify-center">
                <img
                  src={image}
                  alt="Image of portfolio website showcase of responsiveness on both MacBook and iPhone"
                  className="flex justify-center object-contain h-52 md:h-60"
                />
              </div>

              <div className="lg:h-20">
                <h4 className="font-bold text-lg">{title}</h4>
                <h6 className="text-md font-extralight text-gray-400">
                  {location}
                </h6>
              </div>

              <p className="text-md text-gray-500 font-light lg:h-52 xl:h-32">
                {description}
              </p>

              <div className="flex pb-8">
                <a
                  href={link}
                  target="_blank"
                  className="flex justify-center w-32 h-10 text-white buttonGradient rounded-sm font-bold uppercase text-xs transform transition duration-500 hover:scale-110"
                >
                  <span className="flex mt-3">Besøk {visitTitle}</span>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </NewSection>
  );
}
