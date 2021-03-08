const BulletPoint = ({ bulletPoint }) => {
  return (
    <div className="flex mb-20">
      <img src="http://placehold.jp/15x15.png" alt="" className="mt-1" />
      <h4 className="text-gray-500 text-md ml-1">{bulletPoint}</h4>
    </div>
  );
};

export default function PricingBox({
  header,
  subHeader,
  price,
  bulletPoints,
  extraContent,
}) {
  return (
    <div className="bg-white m-8 border-2 border-blue-200 rounded-md overflow-hidden">
      <h5 className="font-bold text-md flex justify-center bg-blue-100 border-b-2 border-blue-200">
        {header}
      </h5>
      <div className="p-4 space-y-5">
        <span className="text-gray-400 text-md flex justify-center">
          {subHeader}
        </span>
        <div className="flex text-blue-400 justify-center">
          <h5 className="text-2xl mt-1 mr-1">kr</h5>
          <h2 className="text-6xl">{price}</h2>
          <h5 className="uppercase text-xl mt-7">/mo</h5>
        </div>

        {bulletPoints.map((bulletPoint) => {
          return <BulletPoint bulletPoint={bulletPoint} />;
        })}

        {extraContent ? (
          <p className="text-md text-gray-400">{extraContent}</p>
        ) : null}

        <a
          href="https://waerpendevelopment.com"
          target="_blank"
          className="flex justify-center w-32 h-10 text-white bg-blue-400 rounded-sm font-bold uppercase text-xs"
        >
          Contact us
        </a>
      </div>
    </div>
  );
}
