import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewSection({ blueText, blackText, children, icon }) {
  return (
    <div>
      <div className="flex justify-center uppercase font-bold text-3xl lg:text-4xl">
        <h3 className="text-green-500">{blueText}&nbsp;</h3>
        <h3>{blackText}</h3>
      </div>

      <div className="flex space-x-4 justify-center mt-3">
        <div className="text-green-500 font-extralight text-xs mt-0.5">
          ----------
        </div>
        <div>
          <FontAwesomeIcon icon={icon} className="text-green-500 text-2xl" />
        </div>
        <div className="text-green-500 font-extralight text-xs mt-0.5">
          ----------
        </div>
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}
