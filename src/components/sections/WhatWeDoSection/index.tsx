import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import NewSection from "../../NewSection";

export default function WhatWeDoSection() {
  return (
    <div className="flex flex-col mx-3">
      <NewSection blueText="What" blackText="we do" icon={faMobileAlt}>
        <p className="flex justify-center text-lg text-gray-500 text-center font-light">
          We specialize in small business web design and development for clients
          anywhere in Norway. Every line of code is written by hand to ensure
          the best performance, which helps bring in more customers to your site
          and bring more revenue to your business.
        </p>
        <a
          href=""
          className="flex justify-center uppercase text-lg text-blue-400 font-light"
        >
          LEARN MORE
        </a>
      </NewSection>
    </div>
  );
}
