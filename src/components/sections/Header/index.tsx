export default function Header() {
  return (
    <div className="bg-gradient-to-tl from-blue-500 to-blue-800">
      <div className="mx-3 pt-40 pb-12 text-white space-y-9 md:w-2/3 lg:mx-12 lg:w-2/5 xl:mx-64 xl:w-1/3">
        <h2 className="text-25xl font-extrabold md:text-5xl">
          Small Business Web Development & Design
        </h2>
        <p className="font-light">
          No page builders or WordPress - We offer 100% hand-coded websites with
          superior results starting at kr 1500/mo.
        </p>
        <button className="px-8 py-3.5 text-black bg-white rounded-sm font-bold uppercase text-xs">
          Get in touch!
        </button>
        <img
          src="images/header3.png"
          alt=""
          className="w-9/12 absolute z-40 bottom-1/20 right-1/20 md:right-2 md:w-9/12 md:bottom-20 lg:w-2/3 lg:right-8 xl:right-56 xl:w-6/12"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1505 800"
        className="absolute z-0 bottom-0 bg-gray-300"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              transform="translate(1505), scale(-1, 1)"
              style={{ fill: " #fff" }}
              d="M1307.89,352c97.61-58.49,160-115.9,197.11-156.93V800H0V0C279.45,146.85,562.08,290.71,773.09,379.11S1131.81,457.52,1307.89,352Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
