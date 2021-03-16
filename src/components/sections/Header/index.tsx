export default function Header() {
  return (
    <div className="bg-gradient-to-tl from-blue-500 to-blue-800">
      <div className="px-3 pt-40 pb-12 text-white space-y-9">
        <h2 className="text-25xl font-extrabold">
          Small Business Web Development + Design
        </h2>
        <p className="font-light">
          No page builders or WordPress - We offer 100% hand-coded websites with
          superior results starting at kr 1500/mo.
        </p>
        <button className="px-8 py-3.5 text-black bg-white rounded-sm font-bold uppercase text-xs">
          Get in touch!
        </button>
      </div>
      <img
        src="https://d33wubrfki0l68.cloudfront.net/25e94eabb1cdec2613bd265d645dc15324bacfe8/86f45/images/landing-swoosh.svg"
        alt=""
        className=""
      />
    </div>
  );
}
