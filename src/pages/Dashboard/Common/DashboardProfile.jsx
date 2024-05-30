import useAuth from "../../../hooks/useAuth";

const DashboardProfile = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center max-w-7xl mx-auto my-8 lg:my-12">
      <div className="max-w-lg w-full shadow-lg rounded-3xl overflow-hidden">
        <div
          className="bg-cover bg-center h-56"
          style={{ backgroundImage: "url(https://via.placeholder.com/150)" }}
        ></div>
        <div className="p-6">
          <div className="md:flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-20 w-20 overflow-hidden rounded-full">
                <img
                  src={user?.photoURL}
                  alt="Profile Picture"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl lg:text-3xl font-bold">
                  {user?.displayName}
                </h2>
                <p className="text-sm mt-1">{user?.email}</p>
              </div>
            </div>
            <button className="text-sm font-bold text-[#8cbd51] hover:underline">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
