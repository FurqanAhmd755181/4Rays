import Companies from "./Companies";
import AuthHero from "./AuthHero";

const AccountAuth = () => {
  return (
    <div className="w-full  px-4">
      <div className=" flex items-center justify-center  ">
        <AuthHero/>
      </div>

      {/* Companies Section */}
      <div className="flex items-center justify-center mt-10 ">
        <Companies />
      </div>
    </div>
  );
};

export default AccountAuth;
