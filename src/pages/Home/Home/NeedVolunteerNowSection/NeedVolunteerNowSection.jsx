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
    <div>
      <div className="text-center flex justify-center items-center flex-col space-y-4">
        <h1 className="text-4xl font-semibold">Volunteer Needs Now</h1>
        <p className="w-2/3">
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
      <div className="text-center">
        <Link
          to="/needVolunteer"
          className="btn secondary-btn mb-12 mt-6 border-none text-base"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default NeedVolunteerNowSection;
