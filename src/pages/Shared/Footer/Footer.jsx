const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-200">
      <div className="py-8 max-w-7xl mx-auto">
        <div className="">
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-3xl font-bold text-[#955E42]">
              VolunTrack
            </h1>
            <img className="w-7 md:w-9" src="/vt.png" />
          </div>

          <div className="opacity-80">
            <span className="text-sm text-gray-300 space-y-2 text-start">
              <p className="mt-8 text-base">Contact</p>
              <p>
                Email: <span className="hover:underline">exampl@gmail.com</span>
              </p>
              <p>
                Phone: <span className="hover:underline">+439785947</span>
              </p>
              <p>
                Address:{" "}
                <span className="hover:underline">
                  Banani, Dhaka, Bangladesh
                </span>
              </p>
            </span>
          </div>
        </div>

        <hr className="my-6 md:my-8 border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between opacity-80">
          <p className="text-sm text-gray-300">
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
