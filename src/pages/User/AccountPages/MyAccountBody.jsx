import Companies from "./Companies";

import HeroMyAccount from "./HeroMyAccount";
const MyAccountBody = () => {
  return (
    <div className="w-full  px-4">
      <div className=" flex items-center justify-center ">
        <HeroMyAccount />
      </div>

      {/* Companies Section */}
      <div className="flex items-center justify-center ">
        <Companies />
      </div>
    </div>
  );
};

export default MyAccountBody;
