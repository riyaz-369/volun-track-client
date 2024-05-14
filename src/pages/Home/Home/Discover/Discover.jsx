import CountUp from "react-countup";

const Discover = () => {
  return (
    <section className="max-w-7xl mx-auto lg:mb-60 relative">
      <div>
        <div className="overflow-hidden flex-col-reverse lg:flex lg:flex-row px-2">
          <div
            data-aos="fade-right"
            className="bg-cover rounded-3xl h-[312px] md:h-[596px] w-full lg:w-1/2"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/jLKQv9Q/photo-1582213782179-e0d53f98f2ca-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg')",
            }}
          ></div>
          <div className="lg:w-1/2 px-2 md:px-12 lg:py-12 mt-52 lg:mt-0">
            <h2
              data-aos="fade-up"
              className="text-2xl font-bold md:text-3xl lg:text-5xl"
            >
              Discover How We are Making A Difference And How You Can Get
              Involved.
            </h2>

            <p data-aos="fade-up" className="mt-4">
              We are contributing to positive change in our community. Discover
              various volunteering opportunities tailored to your interests and
              skills, and find out how you can play a part in making a
              difference. Join us in our mission to create a brighter future for
              all !
            </p>

            <div
              data-aos="fade-right"
              className="inline-flex w-full mt-6 sm:w-auto"
            >
              <button className="primary-btn btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="flex justify-center items-center">
        <div className="border text-center border-b-8 border-[#955E42] flex items-center space-y-4 md:space-y-0 py-6 px-6 md:py-12 lg:py-20 w-4/5 md:max-w-2xl lg:max-w-5xl rounded-3xl flex-col md:flex-row md:flex justify-center md:justify-around mx-auto md:mb-8 shadow-md bg-[#1A1A1A] absolute bottom-[450px] md:bottom-72 lg:-bottom-52">
          <div className="text-white flex items-center gap-2">
            <div>
              <p className="font-semibold lg:text-xl md:mb-4 opacity-80">
                Volunteer Hours Logged
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#8cbd51]">
                <CountUp
                  start={0}
                  end={5000}
                  duration={20}
                  decimals={0}
                  decimal=","
                ></CountUp>
              </h3>
            </div>
          </div>
          <div className="text-white flex items-center gap-2">
            <div>
              <p className="font-semibold lg:text-xl md:mb-4 opacity-80">
                Food Distributed
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#8cbd51]">
                <CountUp
                  start={0}
                  end={30000}
                  duration={20}
                  decimals={0}
                  decimal=","
                ></CountUp>
              </h3>
            </div>
          </div>
          <div className="text-white flex items-center gap-2">
            <div>
              <p className="font-semibold lg:text-xl md:mb-4 opacity-80">
                Funds Raised
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#8cbd51]">
                <CountUp
                  start={0}
                  end={150000}
                  duration={20}
                  decimals={0}
                  decimal=","
                ></CountUp>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
