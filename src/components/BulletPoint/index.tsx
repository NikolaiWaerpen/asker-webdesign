import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function BulletPoint({ header, content }) {
  return (
    <div className="flex">
      <FontAwesomeIcon icon={faCheck} className="text-blue-400" />
      <div className="ml-2">
        <h4 className=" font-bold text-lg">{header}</h4>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  );
}
