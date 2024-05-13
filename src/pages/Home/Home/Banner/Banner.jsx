import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import banner1 from "../../../../assets/banner/social-service.jpg";
import banner2 from "../../../../assets/banner/helthcare.jpg";
import banner3 from "../../../../assets/banner/education.jpg";
import banner4 from "../../../../assets/banner/animal welfare.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover h-[300px] lg:h-[660px]"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="bg-gradient-to-r from-[#030712] to-80% h-full">
              <div className=" max-w-7xl mx-auto flex items-center h-full">
                <div>
                  <div data-aos="fade-up" className="p-12 md:p-24 lg:p-0">
                    <h1 className="mb-2 lg:mb-5 text-2xl md:text-4xl lg:text-6xl font-bold text-white lg:w-2/3">
                      Join Hands for Change{" "}
                      <span className="text-[#8cbd51]">our Society</span>
                    </h1>
                    <p className="mb-3 lg:mb-5 text-white max-w-xs md:max-w-sm lg:max-w-md text-xs lg:text-base opacity-80 drop-shadow-2xl">
                      Embrace the power of collective action and join us as we
                      work together to drive positive change in our communities.
                    </p>
                    <Link
                      to="/needVolunteer"
                      className="btn btn-outline btn-sm lg:btn-md rounded-full text-gray-200 text-xs md:text-sm lg:text-base border-[#8cbd51] hover:bg-[#955E42] hover:border-[#955E42] md:px-6"
                    >
                      Need Volunteer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover h-[300px] lg:h-[660px]"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className=" bg-gradient-to-r from-[#030712] to-80% h-full">
              <div className=" max-w-7xl mx-auto flex items-center h-full">
                <div>
                  <div data-aos="fade-up" className="p-12 md:p-24 lg:p-0">
                    <h1 className="mb-2 lg:mb-5 text-2xl md:text-4xl lg:text-6xl font-bold text-white lg:w-2/3">
                      Empowering Health,{" "}
                      <span className="text-[#8cbd51]">One Volunteer</span> {""}
                      at a Time
                    </h1>
                    <p className="mb-3 lg:mb-5 text-white max-w-xs md:max-w-sm lg:max-w-md text-xs lg:text-base opacity-80 drop-shadow-2xl">
                      Join us in making a tangible impact on the lives of others
                      through compassionate service.
                    </p>
                    <Link
                      to="/needVolunteer"
                      className="btn btn-outline btn-sm lg:btn-md rounded-full text-gray-200 text-xs md:text-sm lg:text-base border-[#8cbd51] hover:bg-[#955E42] hover:border-[#955E42] hover:text-black  md:px-6"
                    >
                      Need Volunteer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover h-[300px] lg:h-[660px]"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <div className=" bg-gradient-to-r from-[#030712] to-80% h-full">
              <div className=" max-w-7xl mx-auto flex items-center h-full">
                <div>
                  <div data-aos="fade-up" className="p-12 md:p-24 lg:p-0">
                    <h1 className="mb-2 lg:mb-5 text-2xl md:text-4xl lg:text-6xl font-bold text-white lg:w-2/3">
                      Empower Minds, Shape Futures,{" "}
                      <span className="text-[#8cbd51]">Education for All</span>
                    </h1>
                    <p className="mb-3 lg:mb-5 text-white max-w-xs md:max-w-sm lg:max-w-md text-xs lg:text-base opacity-80 drop-shadow-2xl">
                      Join us in making education accessible to all. From
                      tutoring and mentoring to organizing educational workshops
                      and resources, your involvement can ignite a passion for
                      learning and unlock endless opportunities for individuals.
                    </p>
                    <Link
                      to="/needVolunteer"
                      className="btn btn-outline btn-sm lg:btn-md rounded-full text-gray-200 text-xs md:text-sm lg:text-base border-[#8cbd51] hover:bg-[#955E42] hover:border-[#955E42] hover:text-black  md:px-6"
                    >
                      Need Volunteer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover h-[300px] lg:h-[660px]"
            style={{ backgroundImage: `url(${banner4})` }}
          >
            <div className=" bg-gradient-to-r from-[#030712] to-80% h-full">
              <div className=" max-w-7xl mx-auto flex items-center h-full">
                <div>
                  <div data-aos="fade-up" className="p-12 md:p-24 lg:p-0">
                    <h1 className="mb-2 lg:mb-5 text-2xl md:text-4xl lg:text-6xl font-bold text-white lg:w-2/3">
                      Compassion for Creatures,{" "}
                      <span className="text-[#8cbd51]">Volunteer with Us</span>
                    </h1>
                    <p className="mb-3 lg:mb-5 text-white max-w-xs md:max-w-sm lg:max-w-md text-xs lg:text-base opacity-80 drop-shadow-2xl">
                      Join our community of animal lovers and together, let's
                      create a world where every creature is treated with
                      kindness and respect.
                    </p>
                    <Link
                      to="/needVolunteer"
                      className="btn btn-outline btn-sm lg:btn-md rounded-full text-gray-200 text-xs md:text-sm lg:text-base border-[#8cbd51] hover:bg-[#955E42] hover:border-[#955E42] hover:text-black  md:px-6"
                    >
                      Need Volunteer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
