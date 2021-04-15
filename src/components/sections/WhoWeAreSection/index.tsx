import { faUser } from "@fortawesome/free-solid-svg-icons";
import NewSection from "../../NewSection";
import { HeadshotSVG } from "./HeadshotSVG";

export default function WhoWeAreSection() {
  return (
    <div>
      <div className="flex flex-col">
        <NewSection blueText="Hvem" blackText="vi er" icon={faUser}>
          <div className="mx-4 md:mx-12 lg:mx-40 xl:mx-24rem 2xl:mx-34rem">
            <p className="flex justify-center text-lg text-gray-500 text-center font-light z-10">
              Mitt navn er Nikolai Wærpen og jeg er en webutvikler. Jeg jobber
              fulltid med utvikling hos Intility. Asker Webdesign er et
              selvstartet firma som jeg bruker til å dele mine design- og
              utviklingsferdigheter på et mer personlig nivå. Alt jeg kan er
              selvlært, og jeg har jobbet med utvikling både privat og
              profesjonelt i flere år
            </p>

            <div className="mt-12 md:mx-20 flex flex-col justify-center">
              <div className="relative flex justify-center">
                <div className="w-72 mx-8 z-10">
                  <img
                    src="/images/headshotblob.png"
                    alt="Headshot of Nikolai Waerpen, Developer and CEO"
                    className="object-contain"
                  />
                </div>
                <div className="absolute z-0 -top-4 lg:-top-8 2xl:-top-10 text-themecolor6">
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
