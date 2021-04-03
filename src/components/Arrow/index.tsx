import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// const arrowVariants = {
//   hidden: {
//     opacity: 0,
//     // rotateZ: -180
//   },
//   visible: {
//     opacity: 1,
//     // rotateZ:
//     transition: {
//       delay: 0.1,
//     },
//   },
// };

const arrowVariants = {
  hidden: { scale: 0, rotateZ: -280 },
  visible: {
    scale: 1,
    rotateZ: 0,
    transition: {
      type: "tween",
      duration: 0.6,
    },
  },
};

export default function Arrow() {
  return (
    <Link
      to="header"
      smooth={true}
      duration={1000}
      className="flex justify-center"
    >
      <motion.div
        className="bg-gradient-to-tl from-green-400 to-green-600 rounded-full flex justify-center fixed px-2 py-1.5 bottom-10 right-10 text-white text-3xl z-50 shadow-md"
        variants={arrowVariants}
        initial="hidden"
        animate="visible"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </motion.div>
    </Link>
  );
}
