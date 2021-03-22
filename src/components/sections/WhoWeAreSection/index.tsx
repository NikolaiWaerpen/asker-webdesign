import { faUser } from "@fortawesome/free-solid-svg-icons";
import NewSection from "../../NewSection";

export default function WhoWeAreSection() {
  return (
    <div className="flex flex-col p-16">
      <NewSection blueText="Who" blackText="we are" icon={faUser}>
        <p className="flex justify-center text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi magni
          repellat ad ipsum blanditiis obcaecati atque nam incidunt et
          distinctio porro ratione mollitia non doloribus maxime, odio dolores
          esse aliquid?
        </p>
        <a
          href=""
          className="flex justify-center uppercase text-xl text-blue-400 font-light"
        >
          LEARN MORE
        </a>
      </NewSection>

      <img src="http://placehold.jp/290x299.png" alt="" className="mb-12" />
      <div className="flex flex-col justify-center">
        <h3 className="flex justify-center text-xl">Nikolai Wærpen</h3>
        <h4 className="flex justify-center text-gray-500 text-lg">
          Owner & Developer
        </h4>
      </div>
    </div>
  );
}
