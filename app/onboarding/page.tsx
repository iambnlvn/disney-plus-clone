import CompatibleDevices from "@/components/onBoarding/CompatibleDevices";
import Discover from "@/components/onBoarding/Discover";
import Faq from "@/components/onBoarding/Faq";
import Footer from "@/components/onBoarding/Footer";
import LandingPage from "@/components/onBoarding/LandingPage";
import Overview from "@/components/onBoarding/Overview";

const page = () => {
  return (
    <div className="bg-[#0f1014]">
      <LandingPage />
      <Overview />
      <Discover />
      <CompatibleDevices />
      <Faq />
      <Footer />
    </div>
  );
};

export default page;
