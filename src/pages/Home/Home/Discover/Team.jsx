const Team = () => {
  return (
    <section className="">
      <div className="text-center flex flex-col items-center mb-8">
        <p className="uppercase font-medium border-b-2 pb-1 border-[#8cbd51] w-1/3 lg:w-1/6 mb-4">
          Meet Our Team
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold lg:w-2/5">
          Make Difference Today with The Team
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* team 1 */}
        <div className="card card-compact rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-[#1A1A1A]">
          <figure>
            <img
              className=" bg-cover w-full hover:scale-110 transition-all duration-300"
              src="https://i.ibb.co/gt7BY75/pexels-photo-7475689.jpg"
              alt="Health Care"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-green-100">Health Care</h2>
          </div>
        </div>
        {/* team 2 */}
        <div className="card card-compact rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-[#1A1A1A]">
          <figure>
            <img
              className=" bg-cover w-full hover:scale-110 transition-all duration-300"
              src="https://i.ibb.co/xDTCNrz/pexels-photo-9543402.jpg"
              alt="Environment Clean Up Team"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-green-100">
              Environment Clean
            </h2>
          </div>
        </div>
        {/* team 3 */}
        <div className="card card-compact rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-[#1A1A1A]">
          <figure>
            <img
              className=" bg-cover w-full hover:scale-110 transition-all duration-300"
              src="https://i.ibb.co/0p0kbS6/pexels-photo-9037592.jpg"
              alt="Educations Care Team"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-green-100">
              Educations Care
            </h2>
          </div>
        </div>
        {/* team 4 */}
        <div className="card card-compact rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-[#1A1A1A]">
          <figure>
            <img
              className=" bg-cover w-full hover:scale-110 transition-all duration-300"
              src="https://i.ibb.co/1GP9bPH/pexels-photo-6646914.jpg"
              alt="Social Service Team"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-green-100">
              Social Service
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
