import { useEffect, useState } from "react";
import NeedVolunteerCard from "./NeedVolunteerCard";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import empty from "../../assets/animation/empty.json";

const NeedVolunteer = () => {
  const axiosCommon = useAxiosCommon();
  const [volunteers, setVolunteers] = useState([]);

  const [cardPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataCount, setDataCount] = useState(0);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosCommon(
        `/totalVolunteers?page=${currentPage}&size=${cardPerPage}&filter=${filter}&search=${search}`
      );
      setVolunteers(data);
    };
    getData();
  }, [currentPage, cardPerPage, filter, search]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosCommon("/countVolunteers");
      setDataCount(data.count);
    };
    getCount();
  }, [axiosCommon]);

  const numOfPages = Math.ceil(dataCount / cardPerPage);
  const pages = [...Array(numOfPages).keys()].map((ele) => ele + 1);

  const handlePagination = (value) => {
    setCurrentPage(value);
  };

  const handleFilterByCategory = (e) => {
    setFilter(e.target.value);
  };

  const handleReset = () => {
    setFilter("");
    setSearch("");
    setSearchText("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  return (
    <section className=" max-w-7xl mx-auto mb-12 mt-8">
      <Helmet>
        <title>Need Volunteer</title>
      </Helmet>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 bg-[#955E42] bg-opacity-5 p-4 rounded-3xl">
          <div>
            <select
              onChange={handleFilterByCategory}
              name="category"
              value={filter}
              className="border py-1 px-4 rounded-full"
            >
              <option value="">All</option>
              <option value="Health Care">Health Care</option>
              <option value="Social Service">Social Service</option>
              <option value="Education">Education</option>
              <option value="Animal Welfare">Animal Welfare</option>
              <option value="Environment">Environment</option>
            </select>
          </div>
          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden rounded-full">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                className="py-1 px-4 border border-r-0 rounded-l-full text-gray-700 placeholder-gray-500 outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Post Title"
                aria-label="Enter Post Title"
              />
              <button className="px-4 font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-700 rounded-r-full hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                <FaMagnifyingGlass />
              </button>
            </div>
          </form>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-4 font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-700 rounded-full hover:bg-gray-600 focus:bg-gray-600 focus:outline-none py-1"
          >
            <GrPowerReset /> <span>Reset</span>
          </button>
        </div>
      </div>
      {volunteers.length ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteers.map((volunteer) => (
              <NeedVolunteerCard key={volunteer._id} volunteer={volunteer} />
            ))}
          </div>
          {/* pagination */}
          <div className="flex justify-center mt-12">
            {/* prev btn */}
            <button
              disabled={currentPage === 1}
              onClick={() => handlePagination(currentPage - 1)}
              className="disabled:cursor-not-allowed text-2xl transition-colors duration-300 transform mr-8 hover:text-[#955E42]"
            >
              <FaArrowAltCircleLeft />
            </button>
            {/* numbers */}
            {pages.map((btnNumber) => (
              <button
                onClick={() => handlePagination(btnNumber)}
                key={btnNumber}
                className={`hidden ${
                  currentPage === btnNumber ? "bg-[#80a058] text-white" : ""
                } px-6 py-1 mx-1 transition-colors duration-300 transform rounded-full sm:inline hover:bg-[#748E54] font-bold hover:text-white`}
              >
                {btnNumber}
              </button>
            ))}
            {/* next btn */}
            <button
              disabled={currentPage === numOfPages}
              onClick={() => handlePagination(currentPage + 1)}
              className="disabled:cursor-not-allowed text-2xl sm:inline transition-colors duration-300 transform ml-8 hover:text-[#955E42]"
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Lottie className="w-2/5" animationData={empty} />
        </div>
      )}
    </section>
  );
};

export default NeedVolunteer;
