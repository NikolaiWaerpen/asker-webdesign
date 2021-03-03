import { motion } from "framer-motion";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const wave1Variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0,
    },
  },
};

const wave2Variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <div className="bg-blue-600">
        <div className="p-3 flex justify-between">
          <img src="http://placehold.jp/150x50.png" />
          <button className="block" onClick={() => console.log("cool")}>
            {navOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="text-3xl texthovereffect"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-3xl texthovereffect"
              />
            )}
          </button>
        </div>
        <div className="p-12 text-white space-y-9">
          <h3 className="text-2xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            laboriosam aperiam vero quasi cupiditate eum corporis.
          </p>
          <button className="px-8 py-3 text-black bg-white rounded-sm font-bold uppercase text-xs">
            Lorem ipsum
          </button>
        </div>
      </div>

      <div className="flex flex-col p-16">
        <div className="flex justify-center uppercase font-bold text-3xl">
          <h3 className="text-blue-400">What&nbsp;</h3>
          <h3>we do</h3>
        </div>
        <div className="flex space-x-4 justify-center">
          <div className="text-blue-400 font-extralight text-xs">
            ----------
          </div>
          <span>📱</span>
          <div className="text-blue-400 font-extralight text-xs">
            ----------
          </div>
        </div>
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
      </div>
    </div>
  );
}
