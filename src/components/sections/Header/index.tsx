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
          src="https://d33wubrfki0l68.cloudfront.net/81ff3b9ad31c44ae1e5d3af2f0d6364d60edee85/2f15f/images/mock-up-replace.png"
          alt=""
          className="w-80 absolute bottom-32 right-0 md:right-8 md:w-3/4 md:bottom-24 lg:w-2/3 lg:right-16 xl:right-56 xl:w-6/12"
        />
      </div>
      <img
        src="https://d33wubrfki0l68.cloudfront.net/25e94eabb1cdec2613bd265d645dc15324bacfe8/86f45/images/landing-swoosh.svg"
        alt=""
        className=""
      />
    </div>
  );
}
