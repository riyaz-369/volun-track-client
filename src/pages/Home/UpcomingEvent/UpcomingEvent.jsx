const UpcomingEvent = () => {
  return (
    <section className="bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto py-10">
        <div className="text-white ">
          <p
            data-aos="fade-right"
            className="uppercase font-medium opacity-80 border-b-2 pb-1 border-[#8cbd51] w-1/3 lg:w-1/6 mb-4"
          >
            upcoming event
          </p>
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl lg:text-5xl font-bold lg:w-2/5"
          >
            Stay Update With Our Latest Events.
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"
        >
          <div
            className="overflow-hidden bg-cover rounded-3xl cursor-pointer h-72 group border-8 shadow-lg shadow-[#8cbd5173] hover:shadow-[#8cbd51] duration-700"
            style={{
              backgroundImage: `url(https://i.ibb.co/n7npkVT/photo-1674574124345-02c525664b65-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg)`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                Celebrating Our Volunteers
              </h2>
              <p className="mt-2 text-lg tracking-wider font-medium text-[#8cbd51] uppercase ">
                Join now
              </p>
            </div>
          </div>
          <div
            className="overflow-hidden bg-cover rounded-3xl cursor-pointer h-72 group border-8 shadow-lg shadow-[#8cbd5173] hover:shadow-[#8cbd51] duration-700"
            style={{
              backgroundImage: `url(https://i.ibb.co/QK5R8m5/premium-photo-1683134044077-c8af4c752c5f-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg)`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                Food Drive For The Homeless
              </h2>
              <p className="mt-2 text-lg tracking-wider font-medium text-[#8cbd51] uppercase ">
                Join now
              </p>
            </div>
          </div>
          <div
            className="overflow-hidden bg-cover rounded-3xl cursor-pointer h-72 group border-8 shadow-lg shadow-[#8cbd5173] hover:shadow-[#8cbd51] duration-700"
            style={{
              backgroundImage: `url(https://i.ibb.co/ZVg3fK6/premium-photo-1683121339689-9361c0a8bd83-q-80-w-1932-auto-format-fit-crop-ixlib-rb-4-0.jpg)`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                Community Clean up Day
              </h2>
              <p className="mt-2 text-lg tracking-wider font-medium text-[#8cbd51] uppercase ">
                Join now
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
