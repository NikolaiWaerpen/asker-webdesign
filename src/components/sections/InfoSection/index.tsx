import { MobileSVG, ResponsiveSVG, OptimizationSVG } from "./svgs";
import { infoSectionData } from "../../../data/infoSectionData";

const SVG = ({ headerText }) => {
  return (
    <div className="flex justify-center">
      {headerText === infoSectionData[0].header && <MobileSVG />}
      {headerText === infoSectionData[1].header && <ResponsiveSVG />}
      {headerText === infoSectionData[2].header && <OptimizationSVG />}
    </div>
  );
};

export default function InfoSection() {
  return (
    <div>
      {infoSectionData.map(({ header, content }) => {
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
  );
}
