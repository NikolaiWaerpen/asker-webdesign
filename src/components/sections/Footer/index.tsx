export default function Footer() {
  return (
    <div className="bg-gradient-to-tl from-blue-500 to-blue-800 mt-80 md:mt-0">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1505 438.9"
      >
        <path
          style={{ fill: "#FFFFFF" }}
          d="M0,195.1c37.1,41,99.5,98.4,197.1,156.9c176.1,105.5,323.8,115.5,534.8,27.1S1225.6,146.9,1505,0H0V195.1z"
        />
      </svg>

      <div className="text-white space-y-12 px-8 pb-12">
        <img
          // src="http://placehold.jp/150x50.png"
          src="images/logo200.png"
          className="mt-3"
        />
        <div className="text-white text-md space-y-4">
          <h5>contact@waerpendevelopment.com</h5>
          <h5>(+47) 452 93 539</h5>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Navigation</h3>
          <br />
          <div className="bg-blue-400 w-40 h-0.5" />
          <br />
          <h5>Home</h5>
          <h5>About</h5>
          <h5>Services</h5>
          <h5>Portfolio</h5>
          <h5>Contact</h5>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Services</h3>
          <br />
          <div className="bg-blue-400 w-40 h-0.5" />
          <br />
          <h5>Web Design</h5>
          <h5>Website Maintenance</h5>
          <h5>SEO Services</h5>
          <h5>Content Creation</h5>
          <h5>Logo design</h5>
        </div>
      </div>
      <div className="text-white py-8 bg-gradient-to-tl from-blue-500 to-blue-800">
        <div className="flex justify-center">
          <h3 className=" text-gray-200">Copyright © 2021 |&nbsp;</h3>
          <h3 className="font-medium">Waerpen Development</h3>
        </div>
        <h3 className="flex justify-center text-gray-200">
          All Rights Reserved
        </h3>
      </div>
    </div>
  );
}
