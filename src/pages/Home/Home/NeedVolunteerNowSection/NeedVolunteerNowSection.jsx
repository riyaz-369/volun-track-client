import { useEffect, useState } from "react";
import NeedVolunteerNowCard from "./NeedVolunteerNowCard";
import { Link } from "react-router-dom";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";

const NeedVolunteerNowSection = () => {
  const [volunteers, setVolunteers] = useState([]);
  const axiosCommon = useAxiosCommon();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosCommon("/volunteers");
      setVolunteers(data);
    };
    getData();
  }, [axiosCommon]);

  return (
    <div className="px-2 lg:px-0">
      <div
        data-aos="fade-up"
        className="text-center flex justify-center items-center flex-col space-y-2 mb-6"
      >
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold border-b-2 pb-2 border-[#8cbd51]">
          Volunteer Needs Now
        </h1>
        <p className="w-2/3 text-sm lg:text-base">
          Explore our Volunteer Needs Now section to discover urgent
          opportunities for making a difference.Dive into our latest volunteer
          needs and join us in addressing pressing challenges and creating
          positive change.
        </p>
      </div>

      {/* volunteer need now card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.slice(0, 6).map((volunteer) => (
          <NeedVolunteerNowCard key={volunteer._id} volunteer={volunteer} />
        ))}
      </div>
      <div data-aos="fade-up" className="text-center">
        <Link
          to="/needVolunteer"
          className="btn primary-btn mb-6 lg:mb-12 mt-6 border-none text-base"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default NeedVolunteerNowSection;
