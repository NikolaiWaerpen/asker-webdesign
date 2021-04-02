import { faUser } from "@fortawesome/free-solid-svg-icons";
import NewSection from "../../NewSection";

export default function WhoWeAreSection() {
  return (
    <div className="flex flex-col">
      <NewSection blueText="Hvem" blackText="vi er" icon={faUser}>
        <div className="mx-4 md:mx-12 lg:mx-40 xl:mx-96">
          <p className="flex justify-center text-lg text-gray-500 text-center font-light">
            SKJERP DEG OG FINN PÅ NOE Å SMART Å SKRIVE HER. SKJERP DEG OG FINN
            PÅ NOE Å SMART Å SKRIVE HER.SKJERP DEG OG FINN PÅ NOE Å SMART Å
            SKRIVE HER.SKJERP DEG OG FINN PÅ NOE Å SMART Å SKRIVE HER.SKJERP DEG
            OG FINN PÅ NOE Å SMART Å SKRIVE HER.SKJERP DEG OG FINN PÅ NOE Å
            SMART Å SKRIVE HER.
          </p>

          <div className="mt-12 md:mx-20 flex flex-col justify-center">
            <div className="flex justify-center">
              <div className="w-80 lg:w-72 mx-8 rounded-full overflow-hidden ring-2 ring-green-400  ring-offset-2">
                <img
                  src="/images/whoweareimage1cropped.jpg"
                  alt=""
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center mt-12">
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
