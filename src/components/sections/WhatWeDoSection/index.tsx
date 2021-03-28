import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import NewSection from "../../NewSection";

export default function WhatWeDoSection() {
  return (
    <div className="flex flex-col mx-3 mt-40 md:mt-14 md:mx-24 lg:mt-0 lg:mx-56 xl:mx-96">
      <NewSection blueText="Hva" blackText="vi gjør" icon={faMobileAlt}>
        <p className="flex justify-center text-lg text-gray-500 text-center font-light">
          Vi er spesialister på småbedrifter webdesign og utvikling for kunder
          hvor som helst i Norge. Hver kodelinje er skrevet for hånd for å sikre
          den beste ytelsen, som hjelper med å få flere kunder til nettstedet
          ditt og gi mer inntekter til virksomheten din.
        </p>
        {/* <a
          href=""
          className="flex justify-center uppercase text-lg text-blue-400 font-light"
        >
          Les mer
        </a> */}
      </NewSection>
    </div>
  );
}
