const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-200 p-6 lg:p-0">
      <div className="py-8 max-w-7xl mx-auto">
        <div className="">
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-3xl font-bold text-[#955E42]">
              VolunTrack
            </h1>
            <img className="w-7 md:w-9" src="/vt.png" />
          </div>

          <div className="md:flex justify-between items-center">
            <div className="opacity-80">
              <span className="text-sm text-gray-300 space-y-2 text-start">
                <p className="mt-8 text-base">Contact</p>
                <p>
                  Email:{" "}
                  <span className="hover:underline">exampl@gmail.com</span>
                </p>
                <p>
                  Phone: <span className="hover:underline">+439785947</span>
                </p>
              </span>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold">
                Subscribe our newsletter
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row md:gap-2">
                <input
                  type="email"
                  className="block w-full px-4 py-2  border rounded-full border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none bg-gray-900 focus:ring focus:ring-[#553739]"
                  placeholder="Email Address"
                />

                <button className="px-[52px] lg:px-6 py-2 font-medium tracking-wide text-white uppercase transition-colors duration-300 transform bg-[#553739] rounded-full hover:bg-[#955E42]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 md:my-8 border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-300 opacity-80 mb-4 md:mb-0">
            © Copyright 2024. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <a href="https://www.facebook.com/riyazulislam0099" target="_blank">
              <img className="w-8" src="./Facebook.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/riyaz-miah" target="_blank">
              <img className="w-8" src="./LinkedIn.png" alt="" />
            </a>
            <a href="https://twitter.com/riyaz_369" target="_blank">
              <img className="w-8" src="./X.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
