import { MobileSVG, ResponsiveSVG, OptimizationSVG } from "./svgs";
import { infoSectionData } from "../../data/infoSectionData";

const SVG = ({ headerText }) => {
  return (
    <div className="flex justify-center">
      {headerText === infoSectionData[0].header && <MobileSVG />}
      {headerText === infoSectionData[1].header && <ResponsiveSVG />}
      {headerText === infoSectionData[2].header && <OptimizationSVG />}
    </div>
  );
};

export default function InfoSection({ headerText, infoText }) {
  return (
    <div>
      <div className="space-y-3 p-10">
        <SVG headerText={headerText} />
        <h4 className="text-lg font-bold flex justify-center">{headerText}</h4>
        <p className="text-gray-600 flex justify-center text-center font-light text-md">
          {infoText}
        </p>
      </div>
    </div>
  );
}
