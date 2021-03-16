import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="static">
      <div className="absolute w-full">
        <Navigation />
      </div>

      <div className="static">
        <Component {...pageProps} />
      </div>

      <div className="rounded-full flex justify-center fixed px-1.5 bg-blue-500 bottom-10 right-10 text-white text-3xl">
        <Link to="header" smooth={true} duration={1000}>
          <FontAwesomeIcon icon={faArrowUp} />
        </Link>
      </div>
    </div>
  );
}
