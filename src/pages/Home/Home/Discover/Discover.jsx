const Discover = () => {
  return (
    <section className="relative max-w-7xl mx-auto mb-52">
      <div className="">
        <div className="overflow-hidden lg:flex">
          <div
            className="bg-cover rounded-3xl h-[556px] w-full lg:w-1/2"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/jLKQv9Q/photo-1582213782179-e0d53f98f2ca-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg')",
            }}
          ></div>
          <div className="w-1/2 p-12">
            <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">
              Discover How We are Making A Difference And How You Can Get
              Involved.
            </h2>

            <p className="mt-4">
              We are contributing to positive change in our community. Discover
              various volunteering opportunities tailored to your interests and
              skills, and find out how you can play a part in making a
              difference. Join us in our mission to create a brighter future for
              all !
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
              <button className="primary-btn btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="py-20 max-w-5xl rounded-3xl flex justify-around w-full mx-auto mb-12 shadow-md bg-[#1A1A1A] absolute -bottom-48">
          <div className="text-white flex items-center gap-2">
            <div>
              <p className="font-semibold text-xl mb-4 opacity-80">
                Volunteer Hours Logged
              </p>
              <h3 className="text-5xl font-bold">5,000 +</h3>
            </div>
          </div>
          <div className="text-white flex items-center gap-2">
            <div>
              <p className="font-semibold text-xl mb-4 opacity-80">
                Food Distributed
              </p>
              <h3 className="text-5xl font-bold">30,000</h3>
            </div>
          </div>
          <div className="text-white flex items-center gap-2">
            <div>
              <p className="font-semibold text-xl mb-4 opacity-80">
                Funds Raised
              </p>
              <h3 className="text-5xl font-bold">1,50,000 TK</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
