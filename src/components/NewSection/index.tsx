import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewSection({ blueText, blackText, children, icon }) {
  return (
    <div>
      <div className="flex justify-center uppercase font-bold text-3xl lg:text-4xl">
        <h3 className="text-themecolor5">{blueText}&nbsp;</h3>
        <h3>{blackText}</h3>
      </div>

      <div className="flex space-x-4 justify-center mt-3">
        <div className="border-t mt-2.5 w-14 border-dashed border-themecolor5" />
        <div>
          <FontAwesomeIcon icon={icon} className="text-themecolor5 text-2xl" />
        </div>
        <div className="border-t mt-2.5 w-14 border-dashed border-themecolor5" />
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}
