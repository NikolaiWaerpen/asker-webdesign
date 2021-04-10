import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Arrow from "../components/Arrow";
import ReactGA from "react-ga";

const TRACKING_ID = "G-LHGJEDWTMK";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App({ Component, pageProps }: AppProps) {
  const [screenLarge, setScreenLarge] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  const isScrolledDown = () => {
    if (window.scrollY >= 250) setScrolledDown(true);
    else setScrolledDown(false);
  };

  const isScreenLarge = () => {
    if (window.innerWidth > 1023) {
      setScreenLarge(true);
    } else setScreenLarge(false);
  };

  useEffect(() => {
    if (window.innerWidth > 1023) setScreenLarge(true);

    const screenWidthChecker = setTimeout(() => {
      if (window.innerWidth > 1023) setScreenLarge(true);
    }, 1000);

    return () => clearTimeout(screenWidthChecker);
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", isScrolledDown);
    window.addEventListener("resize", isScreenLarge);
  }

  return (
    <div className="static">
      <div className="absolute w-full">
        <Navigation screenLarge={screenLarge} />
      </div>

      <div className="static">
        <Component {...pageProps} screenLarge={screenLarge} />
      </div>

      <Arrow scrolledDown={scrolledDown} />
    </div>
  );
}
