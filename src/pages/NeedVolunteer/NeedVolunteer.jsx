import { useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "./NeedVolunteerCard";

const NeedVolunteer = () => {
  const needVolunteers = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-12">
      {needVolunteers.map((volunteer) => (
        <NeedVolunteerCard key={volunteer._id} volunteer={volunteer} />
      ))}
    </div>
  );
};

export default NeedVolunteer;
