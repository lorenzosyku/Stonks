import LandingSecOne from "./LandingSecOne";
import Banner from "./Banner";
import Header from "./Header";
import LandingSecTwo from "./LandingSecTwo";
import Footer from "./Footer";
import OnlineSupport from "./OnlineSupport";
import Copyright from "./Copyright";

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
