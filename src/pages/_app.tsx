import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [screenLarge, setScreenLarge] = useState(false);

  const isScreenLarge = () => {
    if (window.innerWidth > 1023) {
      setScreenLarge(true);
    } else setScreenLarge(false);
  };

  useEffect(() => {
    if (window.innerWidth > 1023) setScreenLarge(true);

    const screenWidthChecker = setTimeout(() => {
      if (window.innerWidth > 1023) setScreenLarge(true);
    }, 2000);

    return () => clearTimeout(screenWidthChecker);
  }, []);

  if (typeof window !== "undefined")
    window.addEventListener("resize", isScreenLarge);

  return (
    <div className="static">
      <div className="absolute w-full">
        <Navigation screenLarge={screenLarge} />
      </div>

      <div className="static">
        <Component {...pageProps} screenLarge={screenLarge} />
      </div>

      {!screenLarge && (
        <div className="rounded-full flex justify-center fixed px-2 py-1.5 bg-green-500 bottom-10 right-10 text-white text-3xl">
          <Link
            to="header"
            smooth={true}
            duration={1000}
            className="flex justify-center"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </Link>
        </div>
      )}
    </div>
  );
}
