import ErrorRobot from "../../../assets/ErrorRobot.svg";
import ArrowLeft from "../../../assets/ArrowLeft.svg";
import House from "../../../assets/House.svg";

export const Error = () => {
  return (
    <div className=" min-h-screen p-5">
      <div className=" flex flex-col items-center justify-centertext-center max-w-md mx-auto">
        <img src={ErrorRobot} alt="errorImage" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Blog Not Found
        </h1>
        <p className="text-center mb-5">
          Something went wrong. It looks like the page you're looking for could
          not be found. The link might be broken, or the page has been removed.
        </p>

        <div className="flex item-center justify-center space-x-4">
          <button
            className="flex items-center justify-center px-4 py-2 bg-customRed text-white font-semibold rounded-full transition"
            onClick={() => window.history.back()}
          >
            <img src={ArrowLeft} alt="arrowLeft" className="pr-1"/>
            <p>Go Back</p>
          </button>
          <button
            className="flex items-center justify-center px-4 py-2 bg-white-100 text-customRed outline outline-customPeach hover:bg-customPeach font-semibold rounded-full transition"
            onClick={() => (window.location.href = "/")}
          >
            <img src={House} alt="House" className="pr-1"/>
            <p>Go to Home</p>
          </button>
        </div>
      </div>
    </div>
  );
};
