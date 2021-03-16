import { bulletPointData } from "../../../data/bulletPointData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const BulletPoint = ({ header, content }) => {
  return (
    <div className="flex">
      <FontAwesomeIcon icon={faCheck} className="text-blue-400" />
      <div className="ml-2">
        <h4 className=" font-bold text-lg">{header}</h4>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  );
};

export default function WhatWeCanOfferSection() {
  return (
    <div className="space-y-3 mx-5 text-lg">
      <img
        src="https://d33wubrfki0l68.cloudfront.net/1a6a7635d723bd43ad01eb8e14ca555ade9200d9/e643b/images/savings.svg"
        alt=""
      />
      <div className="font-bold text-xl">
        <div className="flex">
          <h4 className="text-blue-400">0,-&nbsp;</h4>
          <h4>Down,&nbsp;</h4>
          <h4 className="text-blue-400">1500,-&nbsp;</h4>
          <h4 className="">Per Month,</h4>
        </div>
        <h4>No Minimum Contract</h4>
      </div>
      <p className="text-gray-500 flecx justify-center">
        $0 down for a standard 5 page small business website. If you need more
        than that then we have to do custom pricing based on the scope of work,
        number of additional pages, and time involved.
        <br />
        <br />
        You own your domain, content, listing, and profiles. Cancel anytime with
        no fees or hassle.
      </p>

      {bulletPointData.map(({ header, content }) => (
        <BulletPoint key={header} header={header} content={content} />
      ))}
    </div>
  );
}
