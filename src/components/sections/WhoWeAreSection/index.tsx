import { faUser } from "@fortawesome/free-solid-svg-icons";
import NewSection from "../../NewSection";

export default function WhoWeAreSection() {
  return (
    <div className="flex flex-col mt-28">
      <NewSection blueText="Who" blackText="we are" icon={faUser}>
        <div className="mx-4 md:mx-12 lg:mx-40 xl:mx-96">
          <p className="flex justify-center text-lg text-gray-500 text-center font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            magni repellat ad ipsum blanditiis obcaecati atque nam incidunt et
            distinctio porro ratione mollitia non doloribus maxime, odio dolores
            esse aliquid?
          </p>
          <a
            href=""
            className="flex justify-center uppercase text-xl text-blue-400 font-light"
          >
            LEARN MORE
          </a>

          <div className="mt-12 md:mx-52 flex flex-col justify-center">
            <img
              src="http://placehold.jp/290x299.png"
              alt=""
              className="mx-8"
            />
            <div className="flex flex-col justify-center mt-12">
              <h3 className="flex justify-center text-xl font-bold">
                Nikolai Wærpen
              </h3>
              <h4 className="flex justify-center text-gray-500 text-lg font-light">
                Owner & Developer
              </h4>
            </div>
          </div>
        </div>
      </NewSection>
    </div>
  );
}
