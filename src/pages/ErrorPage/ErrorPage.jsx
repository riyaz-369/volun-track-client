import Lottie from "lottie-react";
import notFoundPage from "../../assets/animation/404.json";

const ErrorPage = () => {
  return (
    <div className="max-w-2xl mx-auto my-auto space-y-12 h-screen flex flex-col justify-center">
      <h3 className="text-4xl text-center font-ubuntu">Page Not Found</h3>
      <Lottie animationData={notFoundPage}></Lottie>
    </div>
  );
};

export default ErrorPage;
