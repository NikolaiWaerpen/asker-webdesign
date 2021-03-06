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

      {/* New section */}
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

      {/* Three items, make reusable */}
      <div>
        <div className="space-y-3 p-20">
          <div className="w-14 h-14 bg-red-600"></div>
          <h4 className="text-lg font-bold flex justify-center">
            Mobile-First design
          </h4>
          <p className="text-gray-500 flecx justify-center">
            We start building your site for mobile devices first, then we add on
            to it to make tablet and desktop.
          </p>
        </div>
      </div>

      <div className="space-y-3 p-8 text-lg">
        <div className="h-60 bg-red-600"></div>
        <div className="font-bold text-2xl">
          <div className="flex">
            <h4 className="text-blue-400">0,-&nbsp;</h4>
            <h4>Down,&nbsp;</h4>
            <h4 className="text-blue-400">1500,-&nbsp;</h4>
            <h4 className="">Per Month,</h4>
          </div>
          <h4>No Minimum Contract</h4>
        </div>
        <p className="text-gray-500 flecx justify-center">
          $0 down for a standard 5 page small business website. If you need more
          than that then we have to do custom pricing based on the scope of
          work, number of additional pages, and time involved.
          <br />
          <br />
          You own your domain, content, listing, and profiles. Cancel anytime
          with no fees or hassle.
        </p>

        {/* 6 of these */}
        <div>
          <div className="flex">
            <div className="bg-red-600 w-8 h-8"></div>
            <div className="ml-2">
              <h4 className=" font-bold text-lg">Hosting Fees Included</h4>
              <p className="text-gray-500">
                Hosting fees are built right into the monthly payment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center uppercase font-bold text-3xl">
        <h3 className="text-blue-400">Our&nbsp;</h3>
        <h3>Portfolio</h3>
      </div>
      <div className="flex space-x-4 justify-center">
        <div className="text-blue-400 font-extralight text-xs">----------</div>
        <span>🖥</span>
        <div className="text-blue-400 font-extralight text-xs">----------</div>
      </div>

      {/* Three of these cards */}
      <div className="bg-white p-4 m-8 border-b-2 border-blue-500 space-y-5">
        <img
          src="http://placehold.jp/298x163.png"
          alt=""
          className="flex justify-center"
        />
        <div>
          <h4 className="font-bold text-lg">Burger</h4>
          <h6 className="text-md text-gray-400">Billingstad, Asker</h6>
        </div>
        <p className="text-md text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          corrupti ipsum odio praesentium a molestiae deserunt.
        </p>
        <a
          href="https://waerpendevelopment.com"
          target="_blank"
          className="px-8 py-3 text-white bg-blue-400 rounded-sm font-bold uppercase text-xs"
        >
          Visit burger
        </a>
      </div>

      <div className="flex flex-col p-16">
        <div className="flex justify-center uppercase font-bold text-3xl">
          <h3 className="text-blue-400">Who&nbsp;</h3>
          <h3>we are</h3>
        </div>
        <div className="flex space-x-4 justify-center">
          <div className="text-blue-400 font-extralight text-xs">
            ----------
          </div>
          <span className="text-2xl">🦧</span>
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

        <img src="http://placehold.jp/290x299.png" alt="" className="mb-12" />
        <div className="flex flex-col justify-center">
          <h3 className="flex justify-center text-xl">Nikolai Wærpen</h3>
          <h4 className="flex justify-center text-gray-500 text-lg">
            Owner / Developer
          </h4>
        </div>
      </div>
    </div>
  );
}
