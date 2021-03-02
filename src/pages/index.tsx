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
        <div className="p-12 text-white space-y">
          <h3 className="text-2xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            laboriosam aperiam vero quasi cupiditate eum corporis cum et magnam.
          </p>
          <button className="px-8 py-3 text-black bg-white rounded-sm font-bold uppercase text-xs">
            Lorem ipsum
          </button>
        </div>
      </div>
    </div>
  );
}
