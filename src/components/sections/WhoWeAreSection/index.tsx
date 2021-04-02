import { faUser } from "@fortawesome/free-solid-svg-icons";
import NewSection from "../../NewSection";
import { HeadshotSVG } from "./HeadshotSVG";

export default function WhoWeAreSection() {
  return (
    <div className="flex flex-col">
      <NewSection blueText="Hvem" blackText="vi er" icon={faUser}>
        <div className="mx-4 md:mx-12 lg:mx-40 xl:mx-96">
          <p className="flex justify-center text-lg text-gray-500 text-center font-light z-10">
            SKJERP DEG OG FINN PÅ NOE Å SMART Å SKRIVE HER. SKJERP DEG OG FINN
            PÅ NOE Å SMART Å SKRIVE HER.SKJERP DEG OG FINN PÅ NOE Å SMART Å
            SKRIVE HER.SKJERP DEG OG FINN PÅ NOE Å SMART Å SKRIVE HER.SKJERP DEG
            OG FINN PÅ NOE Å SMART Å SKRIVE HER.SKJERP DEG OG FINN PÅ NOE Å
            SMART Å SKRIVE HER.
          </p>

          <div className="mt-12 md:mx-20 flex flex-col justify-center">
            <div className="relative flex justify-center">
              <div className="w-72 lg:w-64 mx-8 rounded-full overflow-hidden ring-2 ring-green-400  z-10">
                <img
                  src="/images/whoweareimage1cropped.jpg"
                  alt=""
                  className="object-contain"
                />
              </div>
              <div className="absolute z-0 -top-4 lg:-top-6 text-green-400">
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
  );
}
