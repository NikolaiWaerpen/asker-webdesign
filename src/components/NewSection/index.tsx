import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewSection({ blueText, blackText, children, icon }) {
  return (
    <div>
      <div>
        <div className="flex justify-center uppercase font-bold text-3xl">
          <h3 className="text-blue-400">{blueText}&nbsp;</h3>
          <h3>{blackText}</h3>
        </div>
        <div className="flex space-x-4 justify-center">
          <div className="text-blue-400 font-extralight text-xs">
            ----------
          </div>
          <div className="text-2xl">
            <FontAwesomeIcon icon={icon} className="text-blue-400 text-xl" />
          </div>
          <div className="text-blue-400 font-extralight text-xs">
            ----------
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
