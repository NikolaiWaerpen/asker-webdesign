import { faUser } from "@fortawesome/free-solid-svg-icons";
import NewSection from "../../NewSection";
import { HeadshotSVG } from "./HeadshotSVG";

export default function WhoWeAreSection() {
  return (
    <div>
      <div className="flex flex-col">
        <NewSection blueText="Hvem" blackText="vi er" icon={faUser}>
          <div className="mx-4 md:mx-12 lg:mx-40 xl:mx-96">
            <p className="flex justify-center text-lg text-gray-500 text-center font-light z-10">
              Mitt navn er Nikolai Wærpen, jeg er en webutvikler. Jeg jobber
              fulltid med utvikling hos et stort norskt IT-selskap og med
              Waerpen Development på siden. Jeg startet denne bedriften for å
              lære og teste mine ferdigheter ved å jobbe helt selstendig på egne
              prosjekter. Jeg er selvlært og har jobbet med utvikling i over 3
              år
            </p>

            <div className="mt-12 md:mx-20 flex flex-col justify-center">
              <div className="relative flex justify-center">
                <div className="w-60 lg:w-64 mx-8 rounded-full overflow-hidden ring-2 ring-green-400  z-10">
                  <img
                    src="/images/headshot.png"
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute z-0 -top-4 lg:-top-8 2xl:-top-10 text-green-400">
                  <HeadshotSVG />
                </div>
              </div>
              <div className="flex flex-col justify-center mt-12 z-10">
                <h3 className="flex justify-center text-xl font-bold">
                  Nikolai Wærpen
                </h3>
                <h4 className="flex justify-center text-gray-500 text-lg font-light">
                  Utvikler & adm. direktør
                </h4>
              </div>
            </div>
          </div>
        </NewSection>
      </div>
      <div className="flex flex-col mt-52">
        <NewSection blueText="Hvem" blackText="vi er" icon={faUser}>
          <div className="mx-4 md:mx-12 lg:mx-40 xl:mx-96">
            <p className="flex justify-center text-lg text-gray-500 text-center font-light z-10">
              Mitt navn er Nikolai Wærpen, jeg er en webutvikler. Jeg jobber
              fulltid med utvikling hos et stort norskt IT-selskap og med
              Waerpen Development på siden. Jeg startet denne bedriften for å
              lære og teste mine ferdigheter ved å jobbe helt selstendig på egne
              prosjekter. Jeg er selvlært og har jobbet med utvikling i over 3
              år
            </p>

            <div className="mt-12 md:mx-20 flex flex-col justify-center">
              <div className="relative flex justify-center">
                <div className="w-60 lg:w-64 mx-8 rounded-full overflow-hidden ring-2 ring-green-400  z-10">
                  <img
                    src="/images/lookingup.png"
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute z-0 -top-4 lg:-top-8 2xl:-top-10 text-green-400">
                  <HeadshotSVG />
                </div>
              </div>
              <div className="flex flex-col justify-center mt-12 z-10">
                <h3 className="flex justify-center text-xl font-bold">
                  Nikolai Wærpen
                </h3>
                <h4 className="flex justify-center text-gray-500 text-lg font-light">
                  Utvikler & adm. direktør
                </h4>
              </div>
            </div>
          </div>
        </NewSection>
      </div>
      <div className="flex flex-col mt-52">
        <NewSection blueText="Hvem" blackText="vi er" icon={faUser}>
          <div className="mx-4 md:mx-12 lg:mx-40 xl:mx-96">
            <p className="flex justify-center text-lg text-gray-500 text-center font-light z-10">
              Mitt navn er Nikolai Wærpen, jeg er en webutvikler. Jeg jobber
              fulltid med utvikling hos et stort norskt IT-selskap og med
              Waerpen Development på siden. Jeg startet denne bedriften for å
              lære og teste mine ferdigheter ved å jobbe helt selstendig på egne
              prosjekter. Jeg er selvlært og har jobbet med utvikling i over 3
              år
            </p>

            <div className="mt-12 md:mx-20 flex flex-col justify-center">
              <div className="relative flex justify-center">
                <div className="w-60 lg:w-64 mx-8 rounded-full overflow-hidden ring-2 ring-green-400  z-10">
                  <img
                    src="/images/hopefulfuture.png"
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute z-0 -top-4 lg:-top-8 2xl:-top-10 text-green-400">
                  <HeadshotSVG />
                </div>
              </div>
              <div className="flex flex-col justify-center mt-12 z-10">
                <h3 className="flex justify-center text-xl font-bold">
                  Nikolai Wærpen
                </h3>
                <h4 className="flex justify-center text-gray-500 text-lg font-light">
                  Utvikler & adm. direktør
                </h4>
              </div>
            </div>
          </div>
        </NewSection>
      </div>
    </div>
  );
}
