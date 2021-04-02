import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const arrowVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
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
