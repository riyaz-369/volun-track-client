import { useEffect, useState } from "react";
import NeedVolunteerCard from "./NeedVolunteerCard";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";

const NeedVolunteer = () => {
  const axiosCommon = useAxiosCommon();

  const [cardPerPage, setCardPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataCount, setDataCount] = useState(0);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosCommon(
        `/totalVolunteers?page=${currentPage}&size=${cardPerPage}`
      );
      setVolunteers(data);
    };
    getData();
  }, [currentPage, cardPerPage]);

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

  return (
    <section className=" max-w-7xl mx-auto my-12">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <div>
            <select
              name="category"
              id="category"
              className="border py-2 px-4 rounded-lg"
            >
              <option value="">Filter By Category</option>
              <option value="Health Care">Health Care</option>
              <option value="Social Service">Social Service</option>
              <option value="Education">Education</option>
              <option value="Animal Welfare">Animal Welfare</option>
              <option value="Environment">Environment</option>
            </select>
          </div>
          <form>
            <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-border-[#553739] focus-within:ring-[#553739]">
              <input
                className="py-1 px-4 rounded-lg text-gray-700 placeholder-gray-500 outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Post Title"
                aria-label="Enter Post Title"
              />

              <button className="px-4 font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                <FaMagnifyingGlass />
              </button>
            </div>
          </form>
          <button className="flex items-center gap-1 px-4 font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none py-1">
            <GrPowerReset /> <span>Reset</span>
          </button>
        </div>
      </div>
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
            } px-6 py-1 mx-1 transition-colors duration-300 transform rounded-lg sm:inline hover:bg-[#748E54] font-bold hover:text-white`}
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
    </section>
  );
};

export default NeedVolunteer;
