import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import NeedVolunteerNowSection from "./NeedVolunteerNowSection/NeedVolunteerNowSection";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import Discover from "./Discover/Discover";
import Team from "./Discover/Team";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>VolunTrack - Home</title>
      </Helmet>
      <div className="mb-6 lg:mb-16">
        <Banner />
      </div>
      <div className="max-w-7xl mx-auto">
        <NeedVolunteerNowSection />
      </div>
      <div className="mb-12 mt-6">
        <UpcomingEvent />
      </div>
      <div className="">
        <Discover />
      </div>
      <div className="max-w-7xl mx-auto my-12">
        <Team />
      </div>
    </div>
  );
};

export default Home;
