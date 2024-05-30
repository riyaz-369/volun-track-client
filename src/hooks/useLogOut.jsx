import Swal from "sweetalert2";
import useAuth from "./useAuth";

const useLogOut = () => {
  const { logOut } = useAuth();
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#748E54",
      cancelButtonColor: "#553739",
      confirmButtonText: "Yes",
    }).then((resulted) => {
      if (resulted.isConfirmed) {
        logOut()
          .then(() => {})
          .catch(() => {
            Swal.fire({
              title: "Something went wrong !",
              icon: "warning",
            });
          });
      }
    });
  };

  return handleLogOut;
};

export default useLogOut;
