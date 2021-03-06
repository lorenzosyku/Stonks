import LandingSecOne from "./LandingSecOne";
import Banner from "./Banner";
import Header from "./Header";
import LandingSecTwo from "./LandingSecTwo";
import Footer from "./Footer";
import OnlineSupport from "./OnlineSupport";

function LandingPage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <OnlineSupport />
      <Banner />
      <LandingSecTwo />
      <LandingSecOne />
      <Footer />
    </div>
  );
}

export default LandingPage;
