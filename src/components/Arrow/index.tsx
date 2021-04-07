import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const arrowVariants = {
  hidden: { scale: 0, rotateZ: -280 },
  visible: {
    scale: 1,
    rotateZ: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export default function Arrow({ scrolledDown }) {
  return (
    <Link
      to="header"
      smooth={true}
      duration={1000}
      className="flex justify-center"
    >
      <AnimatePresence>
        {scrolledDown && (
          <motion.div
            className="arrowGradient rounded-full flex justify-center fixed px-2 py-1.5 bottom-10 right-10 text-white text-3xl z-50 shadow-lg"
            variants={arrowVariants}
            initial="hidden"
            animate="visible"
            exit={{
              rotateZ: 280,
              scale: 0,
              transition: { type: "tween", duration: 0.5 },
            }}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}
