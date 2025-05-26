import GetInTouch from "./GetInTouch";
import HeroSection from "./HeroSection";
import Newsletter from "./Newsletter";
import OurFeatures from "./OurFeatures";
import Parteners from "./Parteners";
import Pricing from "./Pricing";
import ShowCase from "./ShowCase";
import Working from "./Working";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Parteners />
      <ShowCase/>
      <OurFeatures/>
      <Working/>
      <Pricing/>
      <Newsletter/>
      <GetInTouch/>
    </div>
  );
}

export default LandingPage;
