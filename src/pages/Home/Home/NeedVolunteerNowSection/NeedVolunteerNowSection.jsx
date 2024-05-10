import axios from "axios";
import { useEffect, useState } from "react";
import NeedVolunteerNowCard from "./NeedVolunteerNowCard";
import { Link } from "react-router-dom";

const NeedVolunteerNowSection = () => {
  const [volunteers, setVolunteers] = useState([]);
  console.log(volunteers);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:5000/volunteers");
      setVolunteers(data);
    };
    getData();
  }, []);

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
        {volunteers.map((volunteer) => (
          <NeedVolunteerNowCard key={volunteer._id} volunteer={volunteer} />
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/needVolunteer"
          className="btn primary-btn btn-outline mb-12 mt-6"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default NeedVolunteerNowSection;
