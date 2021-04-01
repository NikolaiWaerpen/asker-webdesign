import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import NewSection from "../../NewSection";
import { MobileSVG, ResponsiveSVG, OptimizationSVG } from "./svgs";
import { whatWeDoData } from "./whatWeDoData";

const SVG = ({ headerText }) => {
  return (
    <div className="flex justify-center">
      {headerText === whatWeDoData[0].header && <MobileSVG />}
      {headerText === whatWeDoData[1].header && <ResponsiveSVG />}
      {headerText === whatWeDoData[2].header && <OptimizationSVG />}
    </div>
  );
};

export default function WhatWeDoSection() {
  return (
    <div>
      <div className="flex flex-col mx-3 mt-40 md:mt-14 md:mx-24 lg:mt-0 lg:mx-28 xl:mx-56 2xl:mx-96">
        <NewSection blueText="Hva" blackText="vi gjør" icon={faMobileAlt}>
          <p className="flex justify-center text-lg text-gray-500 text-center font-light">
            Vi er spesialister på småbedrifter webdesign og utvikling for kunder
            hvor som helst i Norge. Hver kodelinje er skrevet for hånd for å
            sikre den beste ytelsen, som hjelper med å få flere kunder til
            nettstedet ditt og gi mer inntekter til virksomheten din.
          </p>
        </NewSection>
      </div>

      <div className="mt-12 md:mx-52 lg:mx-28 xl:mx-44 2xl:mx-80 lg:flex">
        {whatWeDoData.map(({ header, content }) => {
          return (
            <div key={header}>
              <div className="space-y-3 p-10">
                <SVG headerText={header} />
                <h4 className="text-lg font-bold flex justify-center">
                  {header}
                </h4>
                <p className="text-gray-600 flex justify-center text-center font-light text-md">
                  {content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
