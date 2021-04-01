import { bulletPointData } from "../../../data/bulletPointData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const BulletPoint = ({ header, content }) => {
  return (
    <div className="flex mt-8 font-light">
      <FontAwesomeIcon icon={faCheck} className="text-green-400 mt-1.5" />
      <div className="ml-2">
        <h4 className=" font-bold text-lg">{header}</h4>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  );
};

export default function WhatWeCanOfferSection() {
  return (
    <div className="space-y-3 mx-5 text-lg md:mx-32 xl:space-y-0 xl:mx-36 xl:flex">
      <div className="flex justify-center ">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/1a6a7635d723bd43ad01eb8e14ca555ade9200d9/e643b/images/savings.svg"
          alt=""
          className="lg:w-9/12 xl:w-11/12"
        />
      </div>
      <div>
        <div className="font-bold text-lg md:text-2xl">
          <div className="flex">
            <h4 className="text-green-400">0,-&nbsp;</h4>
            <h4>depositum,&nbsp;</h4>
            <h4 className="text-green-400">1500,-&nbsp;</h4>
            <h4 className="">hver måned,</h4>
          </div>
          <h4>Ingen bindingstid</h4>
        </div>
        <p className="text-gray-500 font-light">
          0,- depositum for en standard nettside for små bedrifter på 5 sider.
          Hvis dere har et større behov, tilpasser vi priser basert på omfanget
          av arbeidet
          <br />
          <br />
          Du eier domenet, innholdet, oppføringen og profilene dine. Avbryt når
          som helst uten avgifter eller problemer
        </p>

        <div className="md:grid md:grid-cols-2">
          {bulletPointData.map(({ header, content }) => (
            <BulletPoint key={header} header={header} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}
