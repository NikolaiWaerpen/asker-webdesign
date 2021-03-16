import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewSection({ blueText, blackText, children, icon }) {
  return (
    <div>
      <div className="flex justify-center uppercase font-bold text-3xl">
        <h3 className="text-blue-400">{blueText}&nbsp;</h3>
        <h3>{blackText}</h3>
      </div>

      <div className="flex space-x-4 justify-center mt-3">
        <div className="text-blue-400 font-extralight text-xs mt-0.5">
          ----------
        </div>
        <div>
          <FontAwesomeIcon icon={icon} className="text-blue-400 text-2xl" />
        </div>
        <div className="text-blue-400 font-extralight text-xs mt-0.5">
          ----------
        </div>
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}
