import { faUser } from "@fortawesome/free-solid-svg-icons";
import NewSection from "../../NewSection";

export default function WhoWeAreSection() {
  return (
    <div className="flex flex-col mt-28">
      <NewSection blueText="Who" blackText="we are" icon={faUser}>
        <div className="mx-4 md:mx-12 lg:mx-40 xl:mx-96">
          <p className="flex justify-center text-lg text-gray-500 text-center font-light">
            (midlertidig tekst) Det er så fantastisk å tenke på alle mulighetene
            jeg har fremover. Det er ingen restriksjoner, alt venter på at jeg
            skal gripe sjansene. Firmaet skal bli en suksess, musikk er vakkert,
            film er vakkert, litteratur er vakkert, naturen er vakker. Det er
            vakker kunst. Det er ingen regler for flinke og ressurssterke folk.
          </p>
          <a
            href=""
            className="flex justify-center uppercase text-xl text-blue-400 font-light"
          >
            LEARN MORE
          </a>

          <div className="mt-12 md:mx-52 flex flex-col justify-center">
            <img
              src="/images/whoweareimage1cropped.jpg"
              alt=""
              className="mx-8 rounded-full"
            />
            <div className="flex flex-col justify-center mt-12">
              <h3 className="flex justify-center text-xl font-bold">
                Nikolai Wærpen
              </h3>
              <h4 className="flex justify-center text-gray-500 text-lg font-light">
                Developer & CEO
              </h4>
            </div>
          </div>
        </div>
      </NewSection>
    </div>
  );
}
