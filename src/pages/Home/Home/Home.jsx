import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import NeedVolunteerNowSection from "./NeedVolunteerNowSection/NeedVolunteerNowSection";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import Discover from "./Discover/Discover";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>VolunTrack - Home</title>
      </Helmet>
      <div className="mb-16">
        <Banner />
      </div>
      <div className="max-w-7xl mx-auto">
        <NeedVolunteerNowSection />
      </div>
      <div className="mb-12 mt-6">
        <UpcomingEvent />
      </div>
      <div className="mb-12 mt-6">
        <Discover />
      </div>
    </div>
  );
};

export default Home;
