import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import NeedVolunteerNowSection from "./NeedVolunteerNowSection/NeedVolunteerNowSection";

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
    </div>
  );
};

export default Home;
