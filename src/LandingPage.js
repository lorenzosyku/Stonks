import LandingSecOne from "./LandingPageComponents/LandingSecOne";
import Banner from "./LandingPageComponents/Banner";
import Header from "./LandingPageComponents/Header";
import LandingSecTwo from "./LandingPageComponents/LandingSecTwo";
import Footer from "./LandingPageComponents/Footer";
import OnlineSupport from "./LandingPageComponents/OnlineSupport";
import Copyright from "./LandingPageComponents/Copyright";

function LandingPage() {

  return (
    <div className="min-h-screen ">
      <Header />
      <OnlineSupport />
      <Banner />
      <LandingSecTwo />
      <LandingSecOne />
      <Footer />
      <Copyright />
    </div>
  );
}

export default LandingPage;
